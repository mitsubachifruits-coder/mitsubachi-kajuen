"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type GameStatus = "ready" | "playing" | "gameover";

type Obstacle = {
  x: number;
  width: number;
  gapY: number;
  gapHeight: number;
  passed: boolean;
};

type Collectible = {
  id: number;
  x: number;
  y: number;
  radius: number;
  type: "flower" | "cherry";
  collected: boolean;
  rotation: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
};

type GameState = {
  status: GameStatus;
  width: number;
  height: number;
  beeX: number;
  beeY: number;
  beeVelocity: number;
  score: number;
  elapsed: number;
  spawnTimer: number;
  collectibleId: number;
  obstacles: Obstacle[];
  collectibles: Collectible[];
  particles: Particle[];
};

const COLORS = {
  background: "#fafaf9",
  text: "#27272a",
  muted: "#71717a",
  red: "#ff4b4b",
  blue: "#3578e5",
  green: "#28a867",
  yellow: "#f1c40f",
  purple: "#8c52ff",
  beeYellow: "#f4c430",
  beeBlack: "#292929",
  trunk: "#805a3b",
  trunkLight: "#a97a52",
  leaf: "#4d8d61",
  leafLight: "#69a878",
  flowerCenter: "#f0b929",
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const createInitialGame = (
  width = 960,
  height = 560,
): GameState => ({
  status: "ready",
  width,
  height,
  beeX: width * 0.27,
  beeY: height * 0.48,
  beeVelocity: 0,
  score: 0,
  elapsed: 0,
  spawnTimer: 0.8,
  collectibleId: 0,
  obstacles: [],
  collectibles: [],
  particles: [],
});

function roundedRectangle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const safeRadius = Math.min(radius, width / 2, height / 2);

  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + safeRadius,
  );
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - safeRadius,
    y + height,
  );
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - safeRadius,
  );
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function circlesOverlap(
  x1: number,
  y1: number,
  radius1: number,
  x2: number,
  y2: number,
  radius2: number,
) {
  const dx = x1 - x2;
  const dy = y1 - y2;
  const distanceSquared = dx * dx + dy * dy;
  const radiusSum = radius1 + radius2;

  return distanceSquared < radiusSum * radiusSum;
}

function circleIntersectsRectangle(
  circleX: number,
  circleY: number,
  radius: number,
  rectangleX: number,
  rectangleY: number,
  rectangleWidth: number,
  rectangleHeight: number,
) {
  const nearestX = clamp(
    circleX,
    rectangleX,
    rectangleX + rectangleWidth,
  );

  const nearestY = clamp(
    circleY,
    rectangleY,
    rectangleY + rectangleHeight,
  );

  const dx = circleX - nearestX;
  const dy = circleY - nearestY;

  return dx * dx + dy * dy < radius * radius;
}

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameFrameRef = useRef<HTMLDivElement | null>(null);

  const animationFrameRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const audioContextRef = useRef<AudioContext | null>(null);

  const soundEnabledRef = useRef(true);
  const gameRef = useRef<GameState>(createInitialGame());

  const [status, setStatus] = useState<GameStatus>("ready");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    soundEnabledRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    try {
      const savedScore = Number(
        window.localStorage.getItem("mitsubachi-bee-flight-best"),
      );

      if (Number.isFinite(savedScore)) {
        setBestScore(savedScore);
      }
    } catch {
      // localStorageが使用できない環境では保存を行いません。
    }
  }, []);

  const playTone = useCallback(
    (
      frequency: number,
      duration: number,
      volume = 0.035,
      type: OscillatorType = "sine",
    ) => {
      if (!soundEnabledRef.current || typeof window === "undefined") {
        return;
      }

      try {
        const AudioContextClass =
          window.AudioContext ||
          (
            window as typeof window & {
              webkitAudioContext?: typeof AudioContext;
            }
          ).webkitAudioContext;

        if (!AudioContextClass) {
          return;
        }

        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContextClass();
        }

        const audioContext = audioContextRef.current;

        if (audioContext.state === "suspended") {
          void audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const startTime = audioContext.currentTime;

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(frequency, startTime);

        gainNode.gain.setValueAtTime(volume, startTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.0001,
          startTime + duration,
        );

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(startTime);
        oscillator.stop(startTime + duration);
      } catch {
        // 音声再生に対応していない場合でもゲームは継続します。
      }
    },
    [],
  );

  const resetGame = useCallback(
    (beginImmediately: boolean) => {
      const currentGame = gameRef.current;

      const nextGame = createInitialGame(
        currentGame.width,
        currentGame.height,
      );

      if (beginImmediately) {
        nextGame.status = "playing";
        nextGame.beeVelocity = -340;
      }

      gameRef.current = nextGame;

      setScore(0);
      setStatus(beginImmediately ? "playing" : "ready");
    },
    [],
  );

  const finishGame = useCallback(
    (finalScore: number) => {
      const game = gameRef.current;

      if (game.status !== "playing") {
        return;
      }

      game.status = "gameover";
      setStatus("gameover");

      setBestScore((previousBest) => {
        const nextBest = Math.max(previousBest, finalScore);

        try {
          window.localStorage.setItem(
            "mitsubachi-bee-flight-best",
            String(nextBest),
          );
        } catch {
          // 保存できない場合もゲームは継続します。
        }

        return nextBest;
      });

      playTone(180, 0.28, 0.05, "sine");

      window.setTimeout(() => {
        playTone(120, 0.32, 0.035, "sine");
      }, 110);
    },
    [playTone],
  );

  const handleFlight = useCallback(() => {
    const game = gameRef.current;

    if (game.status === "ready" || game.status === "gameover") {
      resetGame(true);
      playTone(480, 0.08, 0.025, "sine");
      return;
    }

    game.beeVelocity = -365;

    playTone(520, 0.045, 0.012, "triangle");
  }, [playTone, resetGame]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((current) => !current);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.code === "Space" ||
        event.code === "ArrowUp" ||
        event.code === "KeyW"
      ) {
        event.preventDefault();

        if (!event.repeat) {
          handleFlight();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleFlight]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = gameFrameRef.current;

    if (!canvas || !frame) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const resizeCanvas = () => {
      const rectangle = frame.getBoundingClientRect();
      const width = Math.max(280, rectangle.width);
      const height = Math.max(420, rectangle.height);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      const game = gameRef.current;
      const previousWidth = game.width || width;
      const previousHeight = game.height || height;

      const xRatio = width / previousWidth;
      const yRatio = height / previousHeight;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );

      game.width = width;
      game.height = height;
      game.beeX = width * 0.27;
      game.beeY *= yRatio;

      game.obstacles.forEach((obstacle) => {
        obstacle.x *= xRatio;
        obstacle.gapY *= yRatio;
        obstacle.gapHeight *= yRatio;
      });

      game.collectibles.forEach((collectible) => {
        collectible.x *= xRatio;
        collectible.y *= yRatio;
      });

      if (game.status !== "playing") {
        game.beeY = height * 0.48;
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(frame);
    resizeCanvas();

    const createParticles = (
      game: GameState,
      x: number,
      y: number,
      color: string,
      amount: number,
    ) => {
      for (let index = 0; index < amount; index += 1) {
        const angle = randomBetween(0, Math.PI * 2);
        const speed = randomBetween(45, 145);
        const life = randomBetween(0.45, 0.8);

        game.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: randomBetween(2.5, 6),
          life,
          maxLife: life,
          color,
        });
      }
    };

    const addScore = (
      game: GameState,
      amount: number,
      x?: number,
      y?: number,
      color?: string,
    ) => {
      game.score += amount;
      setScore(game.score);

      if (
        typeof x === "number" &&
        typeof y === "number" &&
        color
      ) {
        createParticles(game, x, y, color, amount === 5 ? 18 : 10);
      }
    };

    const spawnObstacle = (game: GameState) => {
      const obstacleWidth = clamp(
        game.width * 0.082,
        56,
        82,
      );

      const minimumGap = game.width < 600 ? 174 : 188;
      const maximumGap = game.width < 600 ? 208 : 230;

      const gapHeight = clamp(
        game.height * 0.34,
        minimumGap,
        maximumGap,
      );

      const safeMargin = Math.max(70, game.height * 0.13);
      const minimumGapY = safeMargin + gapHeight / 2;
      const maximumGapY =
        game.height - safeMargin - gapHeight / 2;

      const gapY = randomBetween(
        minimumGapY,
        Math.max(minimumGapY, maximumGapY),
      );

      const x = game.width + obstacleWidth + 20;

      game.obstacles.push({
        x,
        width: obstacleWidth,
        gapY,
        gapHeight,
        passed: false,
      });

      const collectibleType =
        Math.random() < 0.14 ? "cherry" : "flower";

      game.collectibles.push({
        id: game.collectibleId,
        x: x + obstacleWidth / 2,
        y:
          gapY +
          randomBetween(
            -gapHeight * 0.24,
            gapHeight * 0.24,
          ),
        radius: collectibleType === "cherry" ? 15 : 13,
        type: collectibleType,
        collected: false,
        rotation: randomBetween(0, Math.PI * 2),
      });

      game.collectibleId += 1;
    };

    const updateGame = (deltaTime: number) => {
      const game = gameRef.current;

      game.elapsed += deltaTime;

      if (game.status !== "playing") {
        game.beeY =
          game.height * 0.48 +
          Math.sin(game.elapsed * 2.5) * 7;

        return;
      }

      const gravity = 940;
      const speed =
        185 + Math.min(game.score * 2.2, 105);
      const beeRadius = game.width < 600 ? 14 : 16;

      game.beeVelocity += gravity * deltaTime;
      game.beeY += game.beeVelocity * deltaTime;

      game.spawnTimer -= deltaTime;

      if (game.spawnTimer <= 0) {
        spawnObstacle(game);

        game.spawnTimer = clamp(
          1.72 - game.score * 0.012,
          1.28,
          1.72,
        );
      }

      game.obstacles.forEach((obstacle) => {
        obstacle.x -= speed * deltaTime;

        const gapTop = obstacle.gapY - obstacle.gapHeight / 2;
        const gapBottom =
          obstacle.gapY + obstacle.gapHeight / 2;

        const hitsTopTree = circleIntersectsRectangle(
          game.beeX,
          game.beeY,
          beeRadius,
          obstacle.x,
          0,
          obstacle.width,
          gapTop,
        );

        const hitsBottomTree = circleIntersectsRectangle(
          game.beeX,
          game.beeY,
          beeRadius,
          obstacle.x,
          gapBottom,
          obstacle.width,
          game.height - gapBottom,
        );

        if (hitsTopTree || hitsBottomTree) {
          finishGame(game.score);
        }

        if (
          !obstacle.passed &&
          obstacle.x + obstacle.width < game.beeX
        ) {
          obstacle.passed = true;
          addScore(game, 1);
          playTone(650, 0.055, 0.018, "sine");
        }
      });

      game.collectibles.forEach((collectible) => {
        collectible.x -= speed * deltaTime;
        collectible.rotation += deltaTime * 1.8;

        if (
          !collectible.collected &&
          circlesOverlap(
            game.beeX,
            game.beeY,
            beeRadius + 2,
            collectible.x,
            collectible.y,
            collectible.radius,
          )
        ) {
          collectible.collected = true;

          const amount =
            collectible.type === "cherry" ? 5 : 1;

          const color =
            collectible.type === "cherry"
              ? COLORS.red
              : COLORS.yellow;

          addScore(
            game,
            amount,
            collectible.x,
            collectible.y,
            color,
          );

          if (collectible.type === "cherry") {
            playTone(860, 0.11, 0.035, "sine");

            window.setTimeout(() => {
              playTone(1080, 0.12, 0.025, "sine");
            }, 65);
          } else {
            playTone(760, 0.075, 0.025, "sine");
          }
        }
      });

      game.particles.forEach((particle) => {
        particle.x += particle.vx * deltaTime;
        particle.y += particle.vy * deltaTime;
        particle.vy += 110 * deltaTime;
        particle.life -= deltaTime;
      });

      game.obstacles = game.obstacles.filter(
        (obstacle) => obstacle.x + obstacle.width > -100,
      );

      game.collectibles = game.collectibles.filter(
        (collectible) =>
          collectible.x + collectible.radius > -100 &&
          !collectible.collected,
      );

      game.particles = game.particles.filter(
        (particle) => particle.life > 0,
      );

      if (
        game.beeY - beeRadius < 0 ||
        game.beeY + beeRadius > game.height
      ) {
        finishGame(game.score);
      }
    };

    const drawCloud = (
      x: number,
      y: number,
      scale: number,
      opacity: number,
    ) => {
      context.save();
      context.globalAlpha = opacity;
      context.fillStyle = "#ffffff";

      context.beginPath();
      context.arc(x, y, 22 * scale, 0, Math.PI * 2);
      context.arc(
        x + 26 * scale,
        y - 10 * scale,
        29 * scale,
        0,
        Math.PI * 2,
      );
      context.arc(
        x + 58 * scale,
        y,
        23 * scale,
        0,
        Math.PI * 2,
      );
      context.arc(
        x + 30 * scale,
        y + 9 * scale,
        34 * scale,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.restore();
    };

    const drawBackground = (game: GameState) => {
      const skyGradient = context.createLinearGradient(
        0,
        0,
        0,
        game.height,
      );

      skyGradient.addColorStop(0, "#eaf5f5");
      skyGradient.addColorStop(0.57, "#f7f3df");
      skyGradient.addColorStop(1, "#edf1dc");

      context.fillStyle = skyGradient;
      context.fillRect(0, 0, game.width, game.height);

      const sunX = game.width * 0.81;
      const sunY = game.height * 0.17;
      const sunRadius = clamp(game.width * 0.045, 28, 48);

      const sunGradient = context.createRadialGradient(
        sunX,
        sunY,
        0,
        sunX,
        sunY,
        sunRadius * 2.8,
      );

      sunGradient.addColorStop(
        0,
        "rgba(255, 220, 102, 0.55)",
      );
      sunGradient.addColorStop(
        0.3,
        "rgba(255, 220, 102, 0.18)",
      );
      sunGradient.addColorStop(
        1,
        "rgba(255, 220, 102, 0)",
      );

      context.fillStyle = sunGradient;
      context.beginPath();
      context.arc(
        sunX,
        sunY,
        sunRadius * 2.8,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.fillStyle = "rgba(244, 196, 48, 0.78)";
      context.beginPath();
      context.arc(
        sunX,
        sunY,
        sunRadius,
        0,
        Math.PI * 2,
      );
      context.fill();

      const cloudOffset =
        (game.elapsed * 10) % (game.width + 300);

      drawCloud(
        game.width - cloudOffset,
        game.height * 0.2,
        0.75,
        0.48,
      );

      drawCloud(
        game.width * 0.42 -
          ((game.elapsed * 6) % (game.width + 250)),
        game.height * 0.31,
        0.5,
        0.35,
      );

      context.fillStyle = "#b9d0a6";
      context.beginPath();
      context.moveTo(0, game.height * 0.75);

      context.quadraticCurveTo(
        game.width * 0.18,
        game.height * 0.61,
        game.width * 0.38,
        game.height * 0.76,
      );

      context.quadraticCurveTo(
        game.width * 0.6,
        game.height * 0.58,
        game.width * 0.82,
        game.height * 0.75,
      );

      context.quadraticCurveTo(
        game.width * 0.91,
        game.height * 0.69,
        game.width,
        game.height * 0.72,
      );

      context.lineTo(game.width, game.height);
      context.lineTo(0, game.height);
      context.closePath();
      context.fill();

      context.fillStyle = "#94b887";
      context.beginPath();
      context.moveTo(0, game.height * 0.84);

      context.quadraticCurveTo(
        game.width * 0.22,
        game.height * 0.67,
        game.width * 0.46,
        game.height * 0.84,
      );

      context.quadraticCurveTo(
        game.width * 0.73,
        game.height * 0.66,
        game.width,
        game.height * 0.82,
      );

      context.lineTo(game.width, game.height);
      context.lineTo(0, game.height);
      context.closePath();
      context.fill();

      context.fillStyle = "rgba(250, 250, 249, 0.42)";

      for (let index = 0; index < 7; index += 1) {
        const rowY =
          game.height * 0.79 + index * game.height * 0.035;

        context.fillRect(
          0,
          rowY,
          game.width,
          Math.max(1, game.height * 0.004),
        );
      }
    };

    const drawLeaves = (
      x: number,
      y: number,
      width: number,
      direction: "top" | "bottom",
    ) => {
      const clusterY =
        direction === "top" ? y - 1 : y + 1;
      const leafRadius = width * 0.34;

      context.fillStyle = COLORS.leaf;

      const leafPositions = [
        [-0.05, 0],
        [0.25, direction === "top" ? -0.05 : 0.05],
        [0.52, 0],
        [0.83, direction === "top" ? -0.03 : 0.03],
        [1.05, 0],
      ];

      leafPositions.forEach(([xOffset, yOffset], index) => {
        context.beginPath();

        context.ellipse(
          x + width * xOffset,
          clusterY + leafRadius * yOffset,
          leafRadius * (index % 2 === 0 ? 0.95 : 1.12),
          leafRadius * 0.73,
          index * 0.4,
          0,
          Math.PI * 2,
        );

        context.fill();
      });

      context.fillStyle = COLORS.leafLight;

      context.beginPath();
      context.ellipse(
        x + width * 0.52,
        clusterY +
          (direction === "top"
            ? -leafRadius * 0.2
            : leafRadius * 0.2),
        leafRadius * 0.8,
        leafRadius * 0.46,
        -0.35,
        0,
        Math.PI * 2,
      );
      context.fill();
    };

    const drawObstacle = (
      game: GameState,
      obstacle: Obstacle,
    ) => {
      const gapTop =
        obstacle.gapY - obstacle.gapHeight / 2;

      const gapBottom =
        obstacle.gapY + obstacle.gapHeight / 2;

      context.save();

      context.fillStyle = COLORS.trunk;

      if (gapTop > 0) {
        roundedRectangle(
          context,
          obstacle.x,
          -16,
          obstacle.width,
          gapTop + 16,
          obstacle.width * 0.24,
        );
        context.fill();
      }

      if (gapBottom < game.height) {
        roundedRectangle(
          context,
          obstacle.x,
          gapBottom,
          obstacle.width,
          game.height - gapBottom + 16,
          obstacle.width * 0.24,
        );
        context.fill();
      }

      context.strokeStyle = COLORS.trunkLight;
      context.lineWidth = Math.max(1.5, obstacle.width * 0.035);
      context.globalAlpha = 0.55;

      const barkLineX1 = obstacle.x + obstacle.width * 0.3;
      const barkLineX2 = obstacle.x + obstacle.width * 0.68;

      context.beginPath();
      context.moveTo(barkLineX1, 0);
      context.lineTo(barkLineX1, Math.max(0, gapTop - 12));
      context.stroke();

      context.beginPath();
      context.moveTo(barkLineX2, gapBottom + 12);
      context.lineTo(barkLineX2, game.height);
      context.stroke();

      context.globalAlpha = 1;

      drawLeaves(
        obstacle.x,
        gapTop,
        obstacle.width,
        "top",
      );

      drawLeaves(
        obstacle.x,
        gapBottom,
        obstacle.width,
        "bottom",
      );

      context.restore();
    };

    const drawFlower = (collectible: Collectible) => {
      context.save();
      context.translate(collectible.x, collectible.y);
      context.rotate(collectible.rotation);

      const petalColors = [
        COLORS.red,
        COLORS.blue,
        COLORS.green,
        COLORS.purple,
        "#f08ab3",
      ];

      for (let index = 0; index < 5; index += 1) {
        const angle =
          (Math.PI * 2 * index) / 5 - Math.PI / 2;

        const petalX =
          Math.cos(angle) * collectible.radius * 0.68;

        const petalY =
          Math.sin(angle) * collectible.radius * 0.68;

        context.fillStyle = petalColors[index];

        context.beginPath();
        context.ellipse(
          petalX,
          petalY,
          collectible.radius * 0.42,
          collectible.radius * 0.62,
          angle + Math.PI / 2,
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      context.fillStyle = COLORS.flowerCenter;
      context.beginPath();
      context.arc(
        0,
        0,
        collectible.radius * 0.38,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.restore();
    };

    const drawCherry = (collectible: Collectible) => {
      context.save();
      context.translate(collectible.x, collectible.y);

      context.strokeStyle = "#557a44";
      context.lineWidth = 2;
      context.lineCap = "round";

      context.beginPath();
      context.moveTo(0, -2);
      context.quadraticCurveTo(
        -2,
        -12,
        -8,
        -18,
      );

      context.moveTo(1, -2);
      context.quadraticCurveTo(
        4,
        -13,
        9,
        -18,
      );

      context.stroke();

      context.fillStyle = COLORS.red;

      context.beginPath();
      context.arc(-6, 3, 8, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.arc(7, 4, 8, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "rgba(255, 255, 255, 0.58)";

      context.beginPath();
      context.arc(-8, 0, 2, 0, Math.PI * 2);
      context.fill();

      context.beginPath();
      context.arc(5, 1, 2, 0, Math.PI * 2);
      context.fill();

      context.restore();
    };

    const drawCollectibles = (game: GameState) => {
      game.collectibles.forEach((collectible) => {
        if (collectible.collected) {
          return;
        }

        if (collectible.type === "cherry") {
          drawCherry(collectible);
        } else {
          drawFlower(collectible);
        }
      });
    };

    const drawParticles = (game: GameState) => {
      game.particles.forEach((particle) => {
        const opacity = clamp(
          particle.life / particle.maxLife,
          0,
          1,
        );

        context.save();
        context.globalAlpha = opacity;
        context.fillStyle = particle.color;

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.size * opacity,
          0,
          Math.PI * 2,
        );
        context.fill();

        context.restore();
      });
    };

    const drawBee = (game: GameState) => {
      const scale = game.width < 600 ? 0.82 : 1;
      const rotation = clamp(
        game.beeVelocity / 950,
        -0.35,
        0.5,
      );

      const wingMovement =
        Math.sin(game.elapsed * 28) * 0.18;

      context.save();
      context.translate(game.beeX, game.beeY);
      context.rotate(rotation);
      context.scale(scale, scale);

      context.fillStyle = "rgba(255, 255, 255, 0.7)";
      context.strokeStyle = "rgba(62, 94, 100, 0.18)";
      context.lineWidth = 1.2;

      context.save();
      context.rotate(-0.5 + wingMovement);
      context.beginPath();
      context.ellipse(
        -5,
        -13,
        14,
        8,
        -0.25,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.stroke();
      context.restore();

      context.save();
      context.rotate(0.45 - wingMovement);
      context.beginPath();
      context.ellipse(
        7,
        -13,
        14,
        8,
        0.25,
        0,
        Math.PI * 2,
      );
      context.fill();
      context.stroke();
      context.restore();

      context.fillStyle = COLORS.beeYellow;
      context.beginPath();
      context.ellipse(
        0,
        0,
        22,
        15,
        0,
        0,
        Math.PI * 2,
      );
      context.fill();

      context.save();
      context.beginPath();
      context.ellipse(
        0,
        0,
        22,
        15,
        0,
        0,
        Math.PI * 2,
      );
      context.clip();

      context.fillStyle = COLORS.beeBlack;
      context.fillRect(-9, -18, 5, 36);
      context.fillRect(3, -18, 5, 36);

      context.restore();

      context.fillStyle = COLORS.beeBlack;
      context.beginPath();
      context.arc(18, -1, 10, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "#ffffff";
      context.beginPath();
      context.arc(21, -4, 3.2, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = COLORS.beeBlack;
      context.beginPath();
      context.arc(22, -4, 1.4, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = COLORS.beeBlack;
      context.lineWidth = 1.5;
      context.lineCap = "round";

      context.beginPath();
      context.moveTo(19, -9);
      context.quadraticCurveTo(21, -17, 27, -18);
      context.stroke();

      context.beginPath();
      context.moveTo(14, -10);
      context.quadraticCurveTo(14, -18, 19, -20);
      context.stroke();

      context.fillStyle = COLORS.beeBlack;
      context.beginPath();
      context.moveTo(-21, -3);
      context.lineTo(-29, 0);
      context.lineTo(-21, 4);
      context.closePath();
      context.fill();

      context.restore();
    };

    const draw = () => {
      const game = gameRef.current;

      context.clearRect(0, 0, game.width, game.height);

      drawBackground(game);

      game.obstacles.forEach((obstacle) => {
        drawObstacle(game, obstacle);
      });

      drawCollectibles(game);
      drawParticles(game);
      drawBee(game);
    };

    const animate = (currentTime: number) => {
      if (!lastFrameTimeRef.current) {
        lastFrameTimeRef.current = currentTime;
      }

      const deltaTime = Math.min(
        (currentTime - lastFrameTimeRef.current) / 1000,
        0.033,
      );

      lastFrameTimeRef.current = currentTime;

      updateGame(deltaTime);
      draw();

      animationFrameRef.current =
        window.requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      window.requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(
          animationFrameRef.current,
        );
      }
    };
  }, [finishGame, playTone]);

  return (
    <main className="game-page">
      <div className="game-inner">
        <header className="game-header">
          <div>
            <p className="game-eyebrow">
              MINI GAME
            </p>

            <h1 className="game-title">
              Fly Bee!
              <span>みつばちを飛ばそう</span>
            </h1>
          </div>

          <Link href="/" className="back-link">
            HOME
            <span aria-hidden="true">↗</span>
          </Link>
        </header>

        <section className="game-shell">
          <div
            ref={gameFrameRef}
            className="game-frame"
          >
            <canvas
              ref={canvasRef}
              className="game-canvas"
              aria-label="みつばちを飛ばして、木の間を通り、花やさくらんぼを集めるゲーム"
              onPointerDown={handleFlight}
              onContextMenu={(event) =>
                event.preventDefault()
              }
            />

            <div className="game-hud">
              <div className="score-box">
                <span>SCORE</span>
                <strong>{score}</strong>
              </div>

              <button
                type="button"
                className="sound-button"
                onClick={toggleSound}
                aria-label={
                  soundEnabled
                    ? "効果音をオフにする"
                    : "効果音をオンにする"
                }
              >
                {soundEnabled ? "SOUND ON" : "SOUND OFF"}
              </button>
            </div>

            {status === "ready" && (
              <div className="game-overlay">
                <div className="game-panel">
                  <p className="panel-label">
                    MITSUBACHI FLIGHT
                  </p>

                  <h2>
                    花から花へ、
                    <br />
                    みつばちを飛ばそう。
                  </h2>

                  <p className="panel-description">
                    タップ・クリック・スペースキーで上昇。
                    <br />
                    木を避けて、花とさくらんぼを集めよう。
                  </p>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={handleFlight}
                  >
                    START
                    <span aria-hidden="true">→</span>
                  </button>

                  <p className="point-guide">
                    FLOWER +1&nbsp;&nbsp; / &nbsp;&nbsp;CHERRY +5
                  </p>
                </div>
              </div>
            )}

            {status === "gameover" && (
              <div className="game-overlay">
                <div className="game-panel gameover-panel">
                  <p className="panel-label">
                    FLIGHT COMPLETE
                  </p>

                  <h2>よく飛びました！</h2>

                  <div className="result-grid">
                    <div>
                      <span>SCORE</span>
                      <strong>{score}</strong>
                    </div>

                    <div>
                      <span>BEST</span>
                      <strong>{bestScore}</strong>
                    </div>
                  </div>

                  <div className="result-actions">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={handleFlight}
                    >
                      RETRY
                      <span aria-hidden="true">↻</span>
                    </button>

                    <Link
                      href="/order"
                      className="secondary-button"
                    >
                      ORDER
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="game-footer">
          <p>
            TAP / CLICK / SPACE
            <span>TO FLY</span>
          </p>

          <p>
            木にぶつからず、
            <br />
            できるだけ遠くまで飛んでみよう。
          </p>
        </div>
      </div>

      <style>{`
        .game-page {
          min-height: calc(100svh - 88px);
          padding: 64px 48px 80px;
          box-sizing: border-box;
          overflow: hidden;
          background: #fafaf9;
          color: #27272a;
        }

        .game-inner {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
        }

        .game-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
        }

        .game-eyebrow {
          margin: 0 0 18px;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.22em;
          color: #71717a;
        }

        .game-title {
          margin: 0;
          font-size: clamp(44px, 5.6vw, 72px);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .game-title span {
          display: block;
          margin-top: 18px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: 0.08em;
          color: #52525b;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 5px;
          border-bottom: 1px solid #a1a1aa;
          color: #52525b;
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.2em;
          text-decoration: none;
          transition:
            color 180ms ease,
            border-color 180ms ease;
        }

        .back-link:hover {
          color: #27272a;
          border-color: #27272a;
        }

        .game-shell {
          position: relative;
          margin-top: 40px;
          padding: 9px;
          border: 1px solid #deded9;
          border-radius: 28px;
          background: #ffffff;
          box-shadow:
            0 24px 80px rgba(39, 39, 42, 0.08),
            0 4px 18px rgba(39, 39, 42, 0.04);
        }

        .game-frame {
          position: relative;
          width: 100%;
          height: min(66svh, 620px);
          min-height: 500px;
          overflow: hidden;
          border-radius: 19px;
          background: #edf4ec;
          isolation: isolate;
        }

        .game-canvas {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
        }

        .game-hud {
          position: absolute;
          top: 18px;
          right: 18px;
          left: 18px;
          z-index: 4;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          pointer-events: none;
        }

        .score-box {
          display: flex;
          min-width: 74px;
          padding: 11px 14px 10px;
          flex-direction: column;
          gap: 2px;
          border: 1px solid rgba(255, 255, 255, 0.74);
          border-radius: 14px;
          background: rgba(250, 250, 249, 0.7);
          box-shadow: 0 5px 24px rgba(39, 39, 42, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .score-box span {
          font-size: 8px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.2em;
          color: #71717a;
        }

        .score-box strong {
          font-size: 24px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.05em;
          color: #27272a;
        }

        .sound-button {
          padding: 11px 13px;
          border: 1px solid rgba(255, 255, 255, 0.74);
          border-radius: 999px;
          background: rgba(250, 250, 249, 0.7);
          box-shadow: 0 5px 24px rgba(39, 39, 42, 0.08);
          color: #52525b;
          font: inherit;
          font-size: 8px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.16em;
          cursor: pointer;
          pointer-events: auto;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition:
            background-color 180ms ease,
            color 180ms ease;
        }

        .sound-button:hover {
          background: #ffffff;
          color: #27272a;
        }

        .game-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: grid;
          place-items: center;
          padding: 72px 24px 30px;
          box-sizing: border-box;
          background: rgba(250, 250, 249, 0.08);
        }

        .game-panel {
          width: min(100%, 430px);
          padding: 36px 38px 32px;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.84);
          border-radius: 24px;
          background: rgba(250, 250, 249, 0.82);
          box-shadow:
            0 30px 80px rgba(39, 39, 42, 0.14),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          text-align: center;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .panel-label {
          margin: 0 0 18px;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.22em;
          color: #71717a;
        }

        .game-panel h2 {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.045em;
          color: #27272a;
        }

        .panel-description {
          margin: 22px 0 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.9;
          letter-spacing: 0.04em;
          color: #52525b;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 22px;
          box-sizing: border-box;
          border-radius: 999px;
          font: inherit;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.2em;
          text-decoration: none;
          cursor: pointer;
          transition:
            transform 180ms ease,
            background-color 180ms ease,
            color 180ms ease;
        }

        .primary-button {
          margin-top: 28px;
          padding: 0 25px;
          border: 1px solid #27272a;
          background: #27272a;
          color: #ffffff;
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .primary-button:hover {
          background: #111113;
        }

        .secondary-button {
          padding: 0 23px;
          border: 1px solid #c8c8c3;
          background: rgba(255, 255, 255, 0.55);
          color: #27272a;
        }

        .secondary-button:hover {
          border-color: #27272a;
          background: #ffffff;
        }

        .point-guide {
          margin: 20px 0 0;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.16em;
          color: #8b8b84;
        }

        .result-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 27px;
          border-top: 1px solid rgba(113, 113, 122, 0.2);
          border-bottom: 1px solid rgba(113, 113, 122, 0.2);
        }

        .result-grid > div {
          display: flex;
          padding: 20px 10px;
          flex-direction: column;
          gap: 6px;
        }

        .result-grid > div + div {
          border-left: 1px solid rgba(113, 113, 122, 0.2);
        }

        .result-grid span {
          font-size: 8px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.2em;
          color: #71717a;
        }

        .result-grid strong {
          font-size: 34px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.05em;
          color: #27272a;
        }

        .result-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 26px;
        }

        .result-actions .primary-button {
          margin-top: 0;
        }

        .game-footer {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          margin-top: 22px;
          padding: 0 6px;
        }

        .game-footer p {
          margin: 0;
        }

        .game-footer p:first-child {
          font-size: 9px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: 0.2em;
          color: #52525b;
        }

        .game-footer p:first-child span {
          display: block;
          color: #a1a1aa;
        }

        .game-footer p:last-child {
          font-size: 11px;
          font-weight: 400;
          line-height: 1.8;
          letter-spacing: 0.05em;
          text-align: right;
          color: #71717a;
        }

        @media (max-width: 767px) {
          .game-page {
            min-height: calc(100svh - 72px);
            padding: 42px 16px 56px;
          }

          .game-header {
            align-items: flex-start;
            gap: 24px;
          }

          .game-eyebrow {
            margin-bottom: 14px;
            font-size: 8px;
            letter-spacing: 0.18em;
          }

          .game-title {
            font-size: clamp(38px, 12vw, 56px);
          }

          .game-title span {
            margin-top: 14px;
            font-size: 12px;
          }

          .back-link {
            margin-top: 4px;
            font-size: 8px;
          }

          .game-shell {
            margin-top: 28px;
            padding: 6px;
            border-radius: 24px;
          }

          .game-frame {
            height: min(70svh, 620px);
            min-height: 520px;
            border-radius: 18px;
          }

          .game-hud {
            top: 12px;
            right: 12px;
            left: 12px;
          }

          .score-box {
            min-width: 60px;
            padding: 9px 11px 8px;
            border-radius: 12px;
          }

          .score-box strong {
            font-size: 21px;
          }

          .sound-button {
            padding: 10px 11px;
            font-size: 7px;
          }

          .game-overlay {
            padding: 66px 16px 22px;
          }

          .game-panel {
            width: min(100%, 360px);
            padding: 30px 24px 26px;
            border-radius: 20px;
          }

          .panel-label {
            margin-bottom: 14px;
            font-size: 8px;
          }

          .game-panel h2 {
            font-size: clamp(27px, 8vw, 36px);
          }

          .panel-description {
            margin-top: 18px;
            font-size: 12px;
          }

          .primary-button,
          .secondary-button {
            min-height: 46px;
            font-size: 9px;
          }

          .point-guide {
            margin-top: 17px;
            font-size: 7px;
          }

          .result-actions {
            gap: 8px;
          }

          .game-footer {
            margin-top: 18px;
          }

          .game-footer p:last-child {
            font-size: 10px;
          }
        }

        @media (max-width: 390px) {
          .game-page {
            padding-right: 12px;
            padding-left: 12px;
          }

          .game-frame {
            min-height: 500px;
          }

          .game-panel {
            padding-right: 20px;
            padding-left: 20px;
          }

          .result-actions {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .game-footer p:last-child {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .primary-button,
          .secondary-button,
          .back-link,
          .sound-button {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}