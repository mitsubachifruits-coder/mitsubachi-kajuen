"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Status = "ready" | "playing" | "gameover";

type ItemType =
  | "flower"
  | "cherry"
  | "watermelon"
  | "peach"
  | "grape"
  | "apple"
  | "laFrance";

type Obstacle = {
  x: number;
  width: number;
  gapY: number;
  gapHeight: number;
  passed: boolean;
};

type Item = {
  id: number;
  x: number;
  y: number;
  radius: number;
  type: ItemType;
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

type Game = {
  status: Status;
  width: number;
  height: number;
  beeX: number;
  beeY: number;
  beeVelocity: number;
  score: number;
  elapsed: number;
  spawnTimer: number;
  nextItemId: number;
  obstacles: Obstacle[];
  items: Item[];
  particles: Particle[];
};

const COLORS = {
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
};

const ITEM_POOL: ItemType[] = [
  "flower",
  "flower",
  "flower",
  "flower",
  "cherry",
  "watermelon",
  "peach",
  "grape",
  "apple",
  "laFrance",
];

const ITEM_COLORS: Record<ItemType, string> = {
  flower: COLORS.yellow,
  cherry: COLORS.red,
  watermelon: COLORS.green,
  peach: "#f39a70",
  grape: COLORS.purple,
  apple: "#e74646",
  laFrance: "#a5b85d",
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const random = (min: number, max: number) =>
  min + Math.random() * (max - min);

const initialGame = (
  width = 960,
  height = 560,
): Game => ({
  status: "ready",
  width,
  height,
  beeX: width * 0.27,
  beeY: height * 0.48,
  beeVelocity: 0,
  score: 0,
  elapsed: 0,
  spawnTimer: 0.8,
  nextItemId: 0,
  obstacles: [],
  items: [],
  particles: [],
});

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) {
  const r = Math.min(radius, width / 2, height / 2);

  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(
    x + width,
    y,
    x + width,
    y + r,
  );
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - r,
    y + height,
  );
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(
    x,
    y + height,
    x,
    y + height - r,
  );
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function circleHitsRect(
  cx: number,
  cy: number,
  radius: number,
  x: number,
  y: number,
  width: number,
  height: number,
) {
  const nearestX = clamp(cx, x, x + width);
  const nearestY = clamp(cy, y, y + height);
  const dx = cx - nearestX;
  const dy = cy - nearestY;

  return dx * dx + dy * dy < radius * radius;
}

function circlesHit(
  x1: number,
  y1: number,
  r1: number,
  x2: number,
  y2: number,
  r2: number,
) {
  const dx = x1 - x2;
  const dy = y1 - y2;

  return dx * dx + dy * dy < (r1 + r2) ** 2;
}

export default function GamePage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const previousTimeRef = useRef(0);
  const audioRef = useRef<AudioContext | null>(null);
  const soundRef = useRef(true);
  const gameRef = useRef<Game>(initialGame());

  const [status, setStatus] = useState<Status>("ready");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    soundRef.current = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    try {
      const saved = Number(
        window.localStorage.getItem(
          "mitsubachi-bee-flight-best",
        ),
      );

      if (Number.isFinite(saved)) {
        setBestScore(saved);
      }
    } catch {
      // localStorageを利用できない環境でもゲームは動作します。
    }
  }, []);

  const playTone = useCallback(
    (
      frequency: number,
      duration: number,
      volume = 0.03,
      type: OscillatorType = "sine",
    ) => {
      if (
        !soundRef.current ||
        typeof window === "undefined"
      ) {
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

        if (!audioRef.current) {
          audioRef.current = new AudioContextClass();
        }

        const audio = audioRef.current;

        if (audio.state === "suspended") {
          void audio.resume();
        }

        const oscillator = audio.createOscillator();
        const gain = audio.createGain();
        const now = audio.currentTime;

        oscillator.type = type;
        oscillator.frequency.setValueAtTime(
          frequency,
          now,
        );

        gain.gain.setValueAtTime(volume, now);
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          now + duration,
        );

        oscillator.connect(gain);
        gain.connect(audio.destination);

        oscillator.start(now);
        oscillator.stop(now + duration);
      } catch {
        // 音声非対応でもゲームは動作します。
      }
    },
    [],
  );

  const resetGame = useCallback(
    (startImmediately: boolean) => {
      const current = gameRef.current;

      const next = initialGame(
        current.width,
        current.height,
      );

      if (startImmediately) {
        next.status = "playing";
        next.beeVelocity = -340;
      }

      gameRef.current = next;

      setScore(0);
      setStatus(
        startImmediately ? "playing" : "ready",
      );
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

      setBestScore((currentBest) => {
        const nextBest = Math.max(
          currentBest,
          finalScore,
        );

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

      playTone(180, 0.28, 0.05);

      window.setTimeout(() => {
        playTone(120, 0.32, 0.035);
      }, 110);
    },
    [playTone],
  );

  const fly = useCallback(() => {
    const game = gameRef.current;

    if (
      game.status === "ready" ||
      game.status === "gameover"
    ) {
      resetGame(true);
      playTone(480, 0.08, 0.025);
      return;
    }

    game.beeVelocity = -365;

    playTone(
      520,
      0.045,
      0.012,
      "triangle",
    );
  }, [playTone, resetGame]);

  useEffect(() => {
    const onKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.code === "Space" ||
        event.code === "ArrowUp" ||
        event.code === "KeyW"
      ) {
        event.preventDefault();

        if (!event.repeat) {
          fly();
        }
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown,
      );
    };
  }, [fly]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;

    if (!canvas || !frame) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const resize = () => {
      const rect =
        frame.getBoundingClientRect();

      const width = Math.max(
        280,
        rect.width,
      );

      const height = Math.max(
        420,
        rect.height,
      );

      const ratio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      const game = gameRef.current;

      const oldWidth =
        game.width || width;

      const oldHeight =
        game.height || height;

      const scaleX = width / oldWidth;
      const scaleY = height / oldHeight;

      canvas.width = Math.floor(
        width * ratio,
      );

      canvas.height = Math.floor(
        height * ratio,
      );

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0,
      );

      game.width = width;
      game.height = height;
      game.beeX = width * 0.27;
      game.beeY *= scaleY;

      game.obstacles.forEach(
        (obstacle) => {
          obstacle.x *= scaleX;
          obstacle.gapY *= scaleY;
          obstacle.gapHeight *= scaleY;
        },
      );

      game.items.forEach((item) => {
        item.x *= scaleX;
        item.y *= scaleY;
      });

      if (game.status !== "playing") {
        game.beeY = height * 0.48;
      }
    };

    const observer =
      new ResizeObserver(resize);

    observer.observe(frame);
    resize();

    const addParticles = (
      game: Game,
      x: number,
      y: number,
      color: string,
      amount: number,
    ) => {
      for (
        let index = 0;
        index < amount;
        index += 1
      ) {
        const angle = random(
          0,
          Math.PI * 2,
        );

        const speed = random(45, 145);
        const life = random(0.45, 0.8);

        game.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: random(2.5, 6),
          life,
          maxLife: life,
          color,
        });
      }
    };

    const addScore = (
      game: Game,
      amount: number,
      x?: number,
      y?: number,
      color?: string,
    ) => {
      game.score += amount;
      setScore(game.score);

      if (
        x !== undefined &&
        y !== undefined &&
        color
      ) {
        addParticles(
          game,
          x,
          y,
          color,
          amount === 5 ? 18 : 10,
        );
      }
    };

    const spawnObstacle = (
      game: Game,
    ) => {
      const width = clamp(
        game.width * 0.082,
        56,
        82,
      );

      const minGap =
        game.width < 600 ? 174 : 188;

      const maxGap =
        game.width < 600 ? 208 : 230;

      const gapHeight = clamp(
        game.height * 0.34,
        minGap,
        maxGap,
      );

      const safeMargin = Math.max(
        70,
        game.height * 0.13,
      );

      const minY =
        safeMargin + gapHeight / 2;

      const maxY =
        game.height -
        safeMargin -
        gapHeight / 2;

      const gapY = random(
        minY,
        Math.max(minY, maxY),
      );

      const x =
        game.width + width + 20;

      game.obstacles.push({
        x,
        width,
        gapY,
        gapHeight,
        passed: false,
      });

      const type =
        ITEM_POOL[
          Math.floor(
            Math.random() *
              ITEM_POOL.length,
          )
        ];

      const radius =
        type === "flower"
          ? 13
          : type === "watermelon"
            ? 18
            : type === "grape"
              ? 17
              : type === "laFrance"
                ? 16
                : 15;

      game.items.push({
        id: game.nextItemId,
        x: x + width / 2,
        y:
          gapY +
          random(
            -gapHeight * 0.24,
            gapHeight * 0.24,
          ),
        radius,
        type,
        collected: false,
        rotation: random(
          0,
          Math.PI * 2,
        ),
      });

      game.nextItemId += 1;
    };

    const update = (delta: number) => {
      const game = gameRef.current;

      game.elapsed += delta;

      if (game.status !== "playing") {
        game.beeY =
          game.height * 0.48 +
          Math.sin(
            game.elapsed * 2.5,
          ) *
            7;

        return;
      }

      const gravity = 940;

      const speed =
        185 +
        Math.min(
          game.score * 2.2,
          105,
        );

      const beeRadius =
        game.width < 600 ? 14 : 16;

      game.beeVelocity +=
        gravity * delta;

      game.beeY +=
        game.beeVelocity * delta;

      game.spawnTimer -= delta;

      if (game.spawnTimer <= 0) {
        spawnObstacle(game);

        game.spawnTimer = clamp(
          1.72 -
            game.score * 0.012,
          1.28,
          1.72,
        );
      }

      game.obstacles.forEach(
        (obstacle) => {
          obstacle.x -= speed * delta;

          const gapTop =
            obstacle.gapY -
            obstacle.gapHeight / 2;

          const gapBottom =
            obstacle.gapY +
            obstacle.gapHeight / 2;

          const topHit =
            circleHitsRect(
              game.beeX,
              game.beeY,
              beeRadius,
              obstacle.x,
              0,
              obstacle.width,
              gapTop,
            );

          const bottomHit =
            circleHitsRect(
              game.beeX,
              game.beeY,
              beeRadius,
              obstacle.x,
              gapBottom,
              obstacle.width,
              game.height -
                gapBottom,
            );

          if (topHit || bottomHit) {
            finishGame(game.score);
          }

          if (
            !obstacle.passed &&
            obstacle.x +
              obstacle.width <
              game.beeX
          ) {
            obstacle.passed = true;
            addScore(game, 1);

            playTone(
              650,
              0.055,
              0.018,
            );
          }
        },
      );

      game.items.forEach((item) => {
        item.x -= speed * delta;
        item.rotation += delta * 1.8;

        if (
          !item.collected &&
          circlesHit(
            game.beeX,
            game.beeY,
            beeRadius + 2,
            item.x,
            item.y,
            item.radius,
          )
        ) {
          item.collected = true;

          const fruit =
            item.type !== "flower";

          addScore(
            game,
            fruit ? 5 : 1,
            item.x,
            item.y,
            ITEM_COLORS[item.type],
          );

          if (fruit) {
            playTone(
              860,
              0.11,
              0.035,
            );

            window.setTimeout(() => {
              playTone(
                1080,
                0.12,
                0.025,
              );
            }, 65);
          } else {
            playTone(
              760,
              0.075,
              0.025,
            );
          }
        }
      });

      game.particles.forEach(
        (particle) => {
          particle.x +=
            particle.vx * delta;

          particle.y +=
            particle.vy * delta;

          particle.vy +=
            110 * delta;

          particle.life -= delta;
        },
      );

      game.obstacles =
        game.obstacles.filter(
          (obstacle) =>
            obstacle.x +
              obstacle.width >
            -100,
        );

      game.items = game.items.filter(
        (item) =>
          item.x + item.radius >
            -100 &&
          !item.collected,
      );

      game.particles =
        game.particles.filter(
          (particle) =>
            particle.life > 0,
        );

      if (
        game.beeY - beeRadius < 0 ||
        game.beeY + beeRadius >
          game.height
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
      ctx.save();

      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        22 * scale,
        0,
        Math.PI * 2,
      );

      ctx.arc(
        x + 26 * scale,
        y - 10 * scale,
        29 * scale,
        0,
        Math.PI * 2,
      );

      ctx.arc(
        x + 58 * scale,
        y,
        23 * scale,
        0,
        Math.PI * 2,
      );

      ctx.arc(
        x + 30 * scale,
        y + 9 * scale,
        34 * scale,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.restore();
    };

    const drawBackground = (
      game: Game,
    ) => {
      const sky =
        ctx.createLinearGradient(
          0,
          0,
          0,
          game.height,
        );

      sky.addColorStop(
        0,
        "#eaf5f5",
      );

      sky.addColorStop(
        0.57,
        "#f7f3df",
      );

      sky.addColorStop(
        1,
        "#edf1dc",
      );

      ctx.fillStyle = sky;

      ctx.fillRect(
        0,
        0,
        game.width,
        game.height,
      );

      const sunX =
        game.width * 0.81;

      const sunY =
        game.height * 0.17;

      const sunRadius = clamp(
        game.width * 0.045,
        28,
        48,
      );

      const glow =
        ctx.createRadialGradient(
          sunX,
          sunY,
          0,
          sunX,
          sunY,
          sunRadius * 2.8,
        );

      glow.addColorStop(
        0,
        "rgba(255,220,102,.55)",
      );

      glow.addColorStop(
        0.3,
        "rgba(255,220,102,.18)",
      );

      glow.addColorStop(
        1,
        "rgba(255,220,102,0)",
      );

      ctx.fillStyle = glow;

      ctx.beginPath();

      ctx.arc(
        sunX,
        sunY,
        sunRadius * 2.8,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle =
        "rgba(244,196,48,.78)";

      ctx.beginPath();

      ctx.arc(
        sunX,
        sunY,
        sunRadius,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      const cloudOffset =
        (game.elapsed * 10) %
        (game.width + 300);

      drawCloud(
        game.width - cloudOffset,
        game.height * 0.2,
        0.75,
        0.48,
      );

      drawCloud(
        game.width * 0.42 -
          ((game.elapsed * 6) %
            (game.width + 250)),
        game.height * 0.31,
        0.5,
        0.35,
      );

      ctx.fillStyle = "#b9d0a6";

      ctx.beginPath();

      ctx.moveTo(
        0,
        game.height * 0.75,
      );

      ctx.quadraticCurveTo(
        game.width * 0.18,
        game.height * 0.61,
        game.width * 0.38,
        game.height * 0.76,
      );

      ctx.quadraticCurveTo(
        game.width * 0.6,
        game.height * 0.58,
        game.width * 0.82,
        game.height * 0.75,
      );

      ctx.quadraticCurveTo(
        game.width * 0.91,
        game.height * 0.69,
        game.width,
        game.height * 0.72,
      );

      ctx.lineTo(
        game.width,
        game.height,
      );

      ctx.lineTo(0, game.height);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#94b887";

      ctx.beginPath();

      ctx.moveTo(
        0,
        game.height * 0.84,
      );

      ctx.quadraticCurveTo(
        game.width * 0.22,
        game.height * 0.67,
        game.width * 0.46,
        game.height * 0.84,
      );

      ctx.quadraticCurveTo(
        game.width * 0.73,
        game.height * 0.66,
        game.width,
        game.height * 0.82,
      );

      ctx.lineTo(
        game.width,
        game.height,
      );

      ctx.lineTo(0, game.height);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle =
        "rgba(250,250,249,.42)";

      for (
        let index = 0;
        index < 7;
        index += 1
      ) {
        const y =
          game.height * 0.79 +
          index *
            game.height *
            0.035;

        ctx.fillRect(
          0,
          y,
          game.width,
          Math.max(
            1,
            game.height * 0.004,
          ),
        );
      }
    };

    const drawLeaves = (
      x: number,
      y: number,
      width: number,
      direction:
        | "top"
        | "bottom",
    ) => {
      const clusterY =
        direction === "top"
          ? y - 1
          : y + 1;

      const radius = width * 0.34;

      const positions = [
        [-0.05, 0],
        [
          0.25,
          direction === "top"
            ? -0.05
            : 0.05,
        ],
        [0.52, 0],
        [
          0.83,
          direction === "top"
            ? -0.03
            : 0.03,
        ],
        [1.05, 0],
      ];

      ctx.fillStyle = COLORS.leaf;

      positions.forEach(
        (
          [offsetX, offsetY],
          index,
        ) => {
          ctx.beginPath();

          ctx.ellipse(
            x + width * offsetX,
            clusterY +
              radius * offsetY,
            radius *
              (index % 2 === 0
                ? 0.95
                : 1.12),
            radius * 0.73,
            index * 0.4,
            0,
            Math.PI * 2,
          );

          ctx.fill();
        },
      );

      ctx.fillStyle =
        COLORS.leafLight;

      ctx.beginPath();

      ctx.ellipse(
        x + width * 0.52,
        clusterY +
          (direction === "top"
            ? -radius * 0.2
            : radius * 0.2),
        radius * 0.8,
        radius * 0.46,
        -0.35,
        0,
        Math.PI * 2,
      );

      ctx.fill();
    };

    const drawObstacle = (
      game: Game,
      obstacle: Obstacle,
    ) => {
      const top =
        obstacle.gapY -
        obstacle.gapHeight / 2;

      const bottom =
        obstacle.gapY +
        obstacle.gapHeight / 2;

      ctx.save();
      ctx.fillStyle = COLORS.trunk;

      if (top > 0) {
        roundedRect(
          ctx,
          obstacle.x,
          -16,
          obstacle.width,
          top + 16,
          obstacle.width * 0.24,
        );

        ctx.fill();
      }

      if (bottom < game.height) {
        roundedRect(
          ctx,
          obstacle.x,
          bottom,
          obstacle.width,
          game.height -
            bottom +
            16,
          obstacle.width * 0.24,
        );

        ctx.fill();
      }

      ctx.strokeStyle =
        COLORS.trunkLight;

      ctx.lineWidth = Math.max(
        1.5,
        obstacle.width * 0.035,
      );

      ctx.globalAlpha = 0.55;

      ctx.beginPath();

      ctx.moveTo(
        obstacle.x +
          obstacle.width * 0.3,
        0,
      );

      ctx.lineTo(
        obstacle.x +
          obstacle.width * 0.3,
        Math.max(0, top - 12),
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.moveTo(
        obstacle.x +
          obstacle.width * 0.68,
        bottom + 12,
      );

      ctx.lineTo(
        obstacle.x +
          obstacle.width * 0.68,
        game.height,
      );

      ctx.stroke();

      ctx.globalAlpha = 1;

      drawLeaves(
        obstacle.x,
        top,
        obstacle.width,
        "top",
      );

      drawLeaves(
        obstacle.x,
        bottom,
        obstacle.width,
        "bottom",
      );

      ctx.restore();
    };

    const drawFlower = (
      item: Item,
    ) => {
      const colors = [
        COLORS.red,
        COLORS.blue,
        COLORS.green,
        COLORS.purple,
        "#f08ab3",
      ];

      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.rotate(item.rotation);

      colors.forEach(
        (color, index) => {
          const angle =
            (Math.PI *
              2 *
              index) /
              5 -
            Math.PI / 2;

          ctx.fillStyle = color;

          ctx.beginPath();

          ctx.ellipse(
            Math.cos(angle) *
              item.radius *
              0.68,
            Math.sin(angle) *
              item.radius *
              0.68,
            item.radius * 0.42,
            item.radius * 0.62,
            angle + Math.PI / 2,
            0,
            Math.PI * 2,
          );

          ctx.fill();
        },
      );

      ctx.fillStyle = "#f0b929";

      ctx.beginPath();

      ctx.arc(
        0,
        0,
        item.radius * 0.38,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.restore();
    };

    const drawCherry = (
      item: Item,
    ) => {
      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.strokeStyle = "#557a44";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";

      ctx.beginPath();

      ctx.moveTo(0, -2);

      ctx.quadraticCurveTo(
        -2,
        -12,
        -8,
        -18,
      );

      ctx.moveTo(1, -2);

      ctx.quadraticCurveTo(
        4,
        -13,
        9,
        -18,
      );

      ctx.stroke();

      ctx.fillStyle = COLORS.red;

      ctx.beginPath();

      ctx.arc(
        -6,
        3,
        8,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.beginPath();

      ctx.arc(
        7,
        4,
        8,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle =
        "rgba(255,255,255,.58)";

      ctx.beginPath();

      ctx.arc(
        -8,
        0,
        2,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.beginPath();

      ctx.arc(
        5,
        1,
        2,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.restore();
    };

    const drawWatermelon = (
      item: Item,
    ) => {
      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.rotate(
        Math.sin(item.rotation) *
          0.08,
      );

      ctx.fillStyle = "#278c56";

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        17,
        14,
        0,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.strokeStyle = "#b4d65d";
      ctx.lineWidth = 2.4;

      [-9, -4, 2, 8].forEach(
        (x) => {
          ctx.beginPath();

          ctx.moveTo(x, -11);

          ctx.quadraticCurveTo(
            x + 3,
            0,
            x,
            11,
          );

          ctx.stroke();
        },
      );

      ctx.fillStyle =
        "rgba(255,255,255,.35)";

      ctx.beginPath();

      ctx.ellipse(
        -6,
        -6,
        4,
        2,
        -0.4,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.restore();
    };

    const drawPeach = (
      item: Item,
    ) => {
      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.rotate(
        Math.sin(item.rotation) *
          0.08,
      );

      const gradient =
        ctx.createRadialGradient(
          -5,
          -6,
          2,
          0,
          0,
          18,
        );

      gradient.addColorStop(
        0,
        "#ffd0a1",
      );

      gradient.addColorStop(
        0.58,
        "#f5a171",
      );

      gradient.addColorStop(
        1,
        "#e67868",
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        0,
        1,
        15,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.strokeStyle =
        "rgba(157,82,67,.45)";

      ctx.lineWidth = 1.4;

      ctx.beginPath();

      ctx.moveTo(0, -12);

      ctx.quadraticCurveTo(
        4,
        0,
        1,
        14,
      );

      ctx.stroke();

      ctx.strokeStyle = "#557a44";
      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(0, -13);
      ctx.lineTo(2, -19);
      ctx.stroke();

      ctx.fillStyle = "#67a35e";

      ctx.beginPath();

      ctx.ellipse(
        7,
        -16,
        6,
        3,
        -0.4,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.restore();
    };

    const drawGrape = (
      item: Item,
    ) => {
      const grapes = [
        [-7, -8],
        [0, -9],
        [7, -8],
        [-10, -1],
        [-3, -1],
        [4, -1],
        [10, -1],
        [-7, 6],
        [0, 6],
        [7, 6],
        [-3, 13],
        [3, 13],
        [0, 19],
      ];

      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.rotate(
        Math.sin(item.rotation) *
          0.06,
      );

      ctx.strokeStyle = "#557a44";
      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(0, -17);
      ctx.lineTo(0, -11);
      ctx.stroke();

      grapes.forEach(([x, y]) => {
        ctx.fillStyle = "#6d4ac5";

        ctx.beginPath();

        ctx.arc(
          x,
          y,
          5.4,
          0,
          Math.PI * 2,
        );

        ctx.fill();

        ctx.fillStyle =
          "rgba(255,255,255,.24)";

        ctx.beginPath();

        ctx.arc(
          x - 1.5,
          y - 1.5,
          1.3,
          0,
          Math.PI * 2,
        );

        ctx.fill();
      });

      ctx.fillStyle = "#67a35e";

      ctx.beginPath();

      ctx.ellipse(
        7,
        -15,
        7,
        3.5,
        -0.45,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.restore();
    };

    const drawApple = (
      item: Item,
    ) => {
      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.rotate(
        Math.sin(item.rotation) *
          0.07,
      );

      const gradient =
        ctx.createRadialGradient(
          -5,
          -6,
          2,
          0,
          1,
          18,
        );

      gradient.addColorStop(
        0,
        "#ff8585",
      );

      gradient.addColorStop(
        0.65,
        "#e74646",
      );

      gradient.addColorStop(
        1,
        "#bd2f38",
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        -6,
        1,
        11,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.beginPath();

      ctx.arc(
        6,
        1,
        11,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.strokeStyle = "#654a32";
      ctx.lineWidth = 2.2;

      ctx.beginPath();

      ctx.moveTo(0, -8);
      ctx.lineTo(2, -18);
      ctx.stroke();

      ctx.fillStyle = "#5d9b56";

      ctx.beginPath();

      ctx.ellipse(
        8,
        -14,
        7,
        3.5,
        -0.45,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle =
        "rgba(255,255,255,.38)";

      ctx.beginPath();

      ctx.ellipse(
        -7,
        -4,
        3,
        5,
        -0.5,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.restore();
    };

    const drawLaFrance = (
      item: Item,
    ) => {
      ctx.save();

      ctx.translate(
        item.x,
        item.y,
      );

      ctx.rotate(
        Math.sin(item.rotation) *
          0.08,
      );

      const gradient =
        ctx.createRadialGradient(
          -5,
          -5,
          2,
          0,
          3,
          20,
        );

      gradient.addColorStop(
        0,
        "#d9dc87",
      );

      gradient.addColorStop(
        0.6,
        "#adb85e",
      );

      gradient.addColorStop(
        1,
        "#879447",
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.moveTo(0, -13);

      ctx.bezierCurveTo(
        -5,
        -9,
        -5,
        -4,
        -7,
        0,
      );

      ctx.bezierCurveTo(
        -17,
        8,
        -12,
        19,
        0,
        21,
      );

      ctx.bezierCurveTo(
        12,
        19,
        17,
        8,
        7,
        0,
      );

      ctx.bezierCurveTo(
        5,
        -4,
        5,
        -9,
        0,
        -13,
      );

      ctx.closePath();
      ctx.fill();

      ctx.strokeStyle = "#604b33";
      ctx.lineWidth = 2.2;

      ctx.beginPath();

      ctx.moveTo(0, -12);

      ctx.quadraticCurveTo(
        1,
        -18,
        4,
        -21,
      );

      ctx.stroke();

      ctx.fillStyle = "#5f934f";

      ctx.beginPath();

      ctx.ellipse(
        9,
        -17,
        7,
        3.4,
        -0.45,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle =
        "rgba(255,255,255,.3)";

      ctx.beginPath();

      ctx.ellipse(
        -5,
        3,
        3,
        6,
        -0.35,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle =
        "rgba(100,78,44,.32)";

      [
        [-4, 9],
        [5, 12],
        [-7, 14],
        [5, 4],
      ].forEach(([x, y]) => {
        ctx.beginPath();

        ctx.arc(
          x,
          y,
          0.8,
          0,
          Math.PI * 2,
        );

        ctx.fill();
      });

      ctx.restore();
    };

    const drawItems = (
      game: Game,
    ) => {
      const drawings: Record<
        ItemType,
        (item: Item) => void
      > = {
        flower: drawFlower,
        cherry: drawCherry,
        watermelon: drawWatermelon,
        peach: drawPeach,
        grape: drawGrape,
        apple: drawApple,
        laFrance: drawLaFrance,
      };

      game.items.forEach((item) => {
        if (item.collected) {
          return;
        }

        drawings[item.type](item);
      });
    };

    const drawParticles = (
      game: Game,
    ) => {
      game.particles.forEach(
        (particle) => {
          const opacity = clamp(
            particle.life /
              particle.maxLife,
            0,
            1,
          );

          ctx.save();

          ctx.globalAlpha = opacity;
          ctx.fillStyle =
            particle.color;

          ctx.beginPath();

          ctx.arc(
            particle.x,
            particle.y,
            particle.size *
              opacity,
            0,
            Math.PI * 2,
          );

          ctx.fill();
          ctx.restore();
        },
      );
    };

    const drawBee = (
      game: Game,
    ) => {
      const scale =
        game.width < 600 ? 0.82 : 1;

      const rotation = clamp(
        game.beeVelocity / 950,
        -0.35,
        0.5,
      );

      const wing =
        Math.sin(
          game.elapsed * 28,
        ) * 0.18;

      ctx.save();

      ctx.translate(
        game.beeX,
        game.beeY,
      );

      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      ctx.fillStyle =
        "rgba(255,255,255,.7)";

      ctx.strokeStyle =
        "rgba(62,94,100,.18)";

      ctx.lineWidth = 1.2;

      ctx.save();

      ctx.rotate(-0.5 + wing);

      ctx.beginPath();

      ctx.ellipse(
        -5,
        -13,
        14,
        8,
        -0.25,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.save();

      ctx.rotate(0.45 - wing);

      ctx.beginPath();

      ctx.ellipse(
        7,
        -13,
        14,
        8,
        0.25,
        0,
        Math.PI * 2,
      );

      ctx.fill();
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle =
        COLORS.beeYellow;

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        22,
        15,
        0,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.save();

      ctx.beginPath();

      ctx.ellipse(
        0,
        0,
        22,
        15,
        0,
        0,
        Math.PI * 2,
      );

      ctx.clip();

      ctx.fillStyle =
        COLORS.beeBlack;

      ctx.fillRect(
        -9,
        -18,
        5,
        36,
      );

      ctx.fillRect(
        3,
        -18,
        5,
        36,
      );

      ctx.restore();

      ctx.fillStyle =
        COLORS.beeBlack;

      ctx.beginPath();

      ctx.arc(
        18,
        -1,
        10,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.arc(
        21,
        -4,
        3.2,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.fillStyle =
        COLORS.beeBlack;

      ctx.beginPath();

      ctx.arc(
        22,
        -4,
        1.4,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      ctx.strokeStyle =
        COLORS.beeBlack;

      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      ctx.beginPath();

      ctx.moveTo(19, -9);

      ctx.quadraticCurveTo(
        21,
        -17,
        27,
        -18,
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.moveTo(14, -10);

      ctx.quadraticCurveTo(
        14,
        -18,
        19,
        -20,
      );

      ctx.stroke();

      ctx.fillStyle =
        COLORS.beeBlack;

      ctx.beginPath();

      ctx.moveTo(-21, -3);
      ctx.lineTo(-29, 0);
      ctx.lineTo(-21, 4);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const draw = () => {
      const game = gameRef.current;

      ctx.clearRect(
        0,
        0,
        game.width,
        game.height,
      );

      drawBackground(game);

      game.obstacles.forEach(
        (obstacle) => {
          drawObstacle(
            game,
            obstacle,
          );
        },
      );

      drawItems(game);
      drawParticles(game);
      drawBee(game);
    };

    const animate = (
      time: number,
    ) => {
      if (!previousTimeRef.current) {
        previousTimeRef.current =
          time;
      }

      const delta = Math.min(
        (time -
          previousTimeRef.current) /
          1000,
        0.033,
      );

      previousTimeRef.current =
        time;

      update(delta);
      draw();

      animationRef.current =
        window.requestAnimationFrame(
          animate,
        );
    };

    animationRef.current =
      window.requestAnimationFrame(
        animate,
      );

    return () => {
      observer.disconnect();

      if (
        animationRef.current !== null
      ) {
        window.cancelAnimationFrame(
          animationRef.current,
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
              Fly Bee.
              <span>
                みつばちを飛ばそう。
              </span>
            </h1>
          </div>

          <Link
            href="/"
            className="back-link"
          >
            HOME
            <span aria-hidden="true">
              ↗
            </span>
          </Link>
        </header>

        <section className="game-shell">
          <div
            ref={frameRef}
            className="game-frame"
          >
            <canvas
              ref={canvasRef}
              className="game-canvas"
              aria-label="みつばちを飛ばして、木の間を通り、花や果物を集めるゲーム"
              onPointerDown={fly}
              onContextMenu={(
                event,
              ) =>
                event.preventDefault()
              }
            />

            <div className="game-hud">
              <div className="score-box">
                <span>SCORE</span>
                <strong>
                  {score}
                </strong>
              </div>

              <button
                type="button"
                className="sound-button"
                onClick={() =>
                  setSoundEnabled(
                    (current) =>
                      !current,
                  )
                }
                aria-label={
                  soundEnabled
                    ? "効果音をオフにする"
                    : "効果音をオンにする"
                }
              >
                {soundEnabled
                  ? "SOUND ON"
                  : "SOUND OFF"}
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
                    木を避けて、花と果物を集めよう。
                  </p>

                  <button
                    type="button"
                    className="primary-button"
                    onClick={fly}
                  >
                    START
                    <span aria-hidden="true">
                      →
                    </span>
                  </button>

                  <p className="point-guide">
                    FLOWER +1
                    &nbsp;&nbsp; /
                    &nbsp;&nbsp;FRUITS +5
                  </p>
                </div>
              </div>
            )}

            {status ===
              "gameover" && (
              <div className="game-overlay">
                <div className="game-panel gameover-panel">
                  <p className="panel-label">
                    FLIGHT COMPLETE
                  </p>

                  <h2>
                    よく飛びました！
                  </h2>

                  <div className="result-grid">
                    <div>
                      <span>
                        SCORE
                      </span>

                      <strong>
                        {score}
                      </strong>
                    </div>

                    <div>
                      <span>
                        BEST
                      </span>

                      <strong>
                        {bestScore}
                      </strong>
                    </div>
                  </div>

                  <div className="result-actions">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={fly}
                    >
                      RETRY
                      <span aria-hidden="true">
                        ↻
                      </span>
                    </button>

                    <Link
                      href="/order"
                      className="secondary-button"
                    >
                      ORDER
                      <span aria-hidden="true">
                        →
                      </span>
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