"use client";

import { useState } from "react";

type ProductItem = {
  product: string;
  quantity: string;
  price: number;
};

type Destination = {
  tel: string;
  postal: string;
  prefCity: string;
  address: string;
  building: string;
  name: string;
  deliveryDate: string;
  deliveryTime: string;
};

const productMaster = [
  { name: "佐藤錦 500g", price: 3500 },
  { name: "佐藤錦 1kg", price: 6500 },
  { name: "紅秀峰 500g", price: 4000 },
  { name: "紅秀峰 1kg", price: 7500 },
  { name: "やまがた紅王 500g", price: 5000 },
  { name: "サンふじ 5kg", price: 3500 },
  { name: "サンふじ 10kg", price: 6000 },
];

const emptyProduct = (): ProductItem => ({
  product: "",
  quantity: "1",
  price: 0,
});

const emptyDestination = (): Destination => ({
  tel: "",
  postal: "",
  prefCity: "",
  address: "",
  building: "",
  name: "",
  deliveryDate: "",
  deliveryTime: "",
});

export default function OrderPage() {
  const [client, setClient] = useState({
    tel: "",
    email: "",
    postal: "",
    prefCity: "",
    address: "",
    building: "",
    name: "",
  });

  const [destinations, setDestinations] = useState<Destination[]>([
    emptyDestination(),
  ]);

  const [products, setProducts] = useState<ProductItem[]>([emptyProduct()]);

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white p-4 text-base outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100";

  const searchAddress = async (
    postal: string,
    target: "client" | "destination",
    index?: number
  ) => {
    const cleanPostal = postal.replace("-", "");
    if (cleanPostal.length !== 7) return;

    const res = await fetch(
      `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanPostal}`
    );
    const data = await res.json();
    if (!data.results) return;

    const result = data.results[0];
    const fullAddress = `${result.address1}${result.address2}${result.address3}`;

    if (target === "client") {
      setClient((prev) => ({ ...prev, prefCity: fullAddress }));
    } else if (index !== undefined) {
      setDestinations((prev) =>
        prev.map((d, i) => (i === index ? { ...d, prefCity: fullAddress } : d))
      );
    }
  };

  const updateDestination = (
    index: number,
    key: keyof Destination,
    value: string
  ) => {
    setDestinations((prev) =>
      prev.map((d, i) => (i === index ? { ...d, [key]: value } : d))
    );
  };

  const addDestination = () => {
    setDestinations((prev) => [...prev, emptyDestination()]);
  };

  const removeDestination = (index: number) => {
    setDestinations((prev) => prev.filter((_, i) => i !== index));
  };

  const updateProduct = (
    productIndex: number,
    key: keyof ProductItem,
    value: string
  ) => {
    setProducts((prev) =>
      prev.map((item, index) => {
        if (index !== productIndex) return item;

        if (key === "product") {
          const selected = productMaster.find((p) => p.name === value);
          return {
            ...item,
            product: value,
            price: selected ? selected.price * Number(item.quantity || 1) : 0,
          };
        }

        if (key === "quantity") {
          const selected = productMaster.find((p) => p.name === item.product);
          return {
            ...item,
            quantity: value,
            price: selected ? selected.price * Number(value || 1) : 0,
          };
        }

        return { ...item, [key]: value };
      })
    );
  };

  const addProduct = () => {
    setProducts((prev) => [...prev, emptyProduct()]);
  };

  const removeProduct = (productIndex: number) => {
    setProducts((prev) => prev.filter((_, i) => i !== productIndex));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client,
        destinations,
        products,
      }),
    });

    alert("注文が送信されました。");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fafaf9 0%, #f2f2ef 100%)",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          background: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #ecece8",
          borderRadius: "32px",
          padding: "56px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.06)",
        }}
      >
        <h1 className="mb-4 text-center text-3xl font-black text-[#3f3f46]">
          ご注文フォーム
        </h1>

        <p className="mb-12 text-center leading-8 text-[#555]">
          ご注文まことにありがとうございます。
          <br />
          下記内容をご記入の上送信ください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-14">
          <section className="space-y-8">
            <h2 className="text-xl font-bold">ご依頼主</h2>

            <input required placeholder="電話番号" className={inputClass} value={client.tel} onChange={(e) => setClient({ ...client, tel: e.target.value })} />

            <input required type="email" placeholder="メールアドレス（ご注文確認メールが送付されます。）" className={inputClass} value={client.email} onChange={(e) => setClient({ ...client, email: e.target.value })} />

            <input required placeholder="郵便番号" className={inputClass} value={client.postal} onChange={(e) => setClient({ ...client, postal: e.target.value })} onBlur={() => searchAddress(client.postal, "client")} />

            <input required placeholder="都道府県・市区町村・町名" className={`${inputClass} bg-yellow-50`} value={client.prefCity} onChange={(e) => setClient({ ...client, prefCity: e.target.value })} />

            <input required placeholder="番地名" className={inputClass} value={client.address} onChange={(e) => setClient({ ...client, address: e.target.value })} />

            <input placeholder="マンション・アパート名" className={inputClass} value={client.building} onChange={(e) => setClient({ ...client, building: e.target.value })} />

            <input required placeholder="お名前" className={inputClass} value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} />
          </section>

          <section className="space-y-10 border-t pt-10">
            <h2 className="text-xl font-bold">お届け先</h2>

            {destinations.map((d, index) => (
              <div key={index} className="space-y-8 rounded-3xl bg-[#fafaf9] p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-bold">お届け先{index + 1}</h3>

                  {index >= 1 && (
                    <button
                      type="button"
                      onClick={() => removeDestination(index)}
                      className="rounded-xl border border-red-300 px-5 py-2 text-sm font-bold text-red-600 hover:bg-red-50"
                    >
                      このお届け先を削除
                    </button>
                  )}
                </div>

                <input required placeholder="電話番号" className={inputClass} value={d.tel} onChange={(e) => updateDestination(index, "tel", e.target.value)} />

                <input required placeholder="郵便番号" className={inputClass} value={d.postal} onChange={(e) => updateDestination(index, "postal", e.target.value)} onBlur={() => searchAddress(d.postal, "destination", index)} />

                <input required placeholder="都道府県・市区町村・町名" className={`${inputClass} bg-yellow-50`} value={d.prefCity} onChange={(e) => updateDestination(index, "prefCity", e.target.value)} />

                <input required placeholder="番地名" className={inputClass} value={d.address} onChange={(e) => updateDestination(index, "address", e.target.value)} />

                <input placeholder="マンション・アパート名" className={inputClass} value={d.building} onChange={(e) => updateDestination(index, "building", e.target.value)} />

                <input required placeholder="お名前" className={inputClass} value={d.name} onChange={(e) => updateDestination(index, "name", e.target.value)} />

                <input required type="date" className={inputClass} value={d.deliveryDate} onChange={(e) => updateDestination(index, "deliveryDate", e.target.value)} />

                <select required className={inputClass} value={d.deliveryTime} onChange={(e) => updateDestination(index, "deliveryTime", e.target.value)}>
                  <option value="">配達希望時間帯を選択</option>
                  <option value="指定なし">指定なし</option>
                  <option value="午前中">午前中</option>
                  <option value="14時〜16時">14時〜16時</option>
                  <option value="16時〜18時">16時〜18時</option>
                  <option value="18時〜20時">18時〜20時</option>
                  <option value="19時〜21時">19時〜21時</option>
                </select>
              </div>
            ))}

            <button
              type="button"
              onClick={addDestination}
              className="w-full rounded-2xl border bg-white px-6 py-4 font-bold hover:bg-gray-50"
            >
              ＋ お届け先を追加する
            </button>
          </section>

          <section className="space-y-8 border-t pt-10">
            <h2 className="text-xl font-bold">商品</h2>

            {products.map((item, productIndex) => (
              <div
                key={productIndex}
                className="space-y-5 rounded-2xl bg-[#fafaf9] p-6"
              >
                <h3 className="font-bold">商品{productIndex + 1}</h3>

                <select
                  required
                  className={inputClass}
                  value={item.product}
                  onChange={(e) =>
                    updateProduct(productIndex, "product", e.target.value)
                  }
                >
                  <option value="">商品名を選択</option>
                  {productMaster.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}：{p.price.toLocaleString()}円
                    </option>
                  ))}
                </select>

                <select
                  required
                  className={inputClass}
                  value={item.quantity}
                  onChange={(e) =>
                    updateProduct(productIndex, "quantity", e.target.value)
                  }
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={String(n)}>
                      {n}
                    </option>
                  ))}
                </select>

                <p className="font-bold">
                  価格：{item.price.toLocaleString()}円
                </p>

                {productIndex >= 1 && (
                  <button
                    type="button"
                    onClick={() => removeProduct(productIndex)}
                    className="rounded-xl border border-red-300 px-5 py-2 text-sm font-bold text-red-600 hover:bg-red-50"
                  >
                    この商品を削除
                  </button>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={addProduct}
              className="w-full rounded-2xl border bg-white px-6 py-4 font-bold hover:bg-gray-50"
            >
              ＋ 商品を追加する
            </button>
          </section>

          <button
            type="submit"
            className="w-full rounded-2xl bg-yellow-400 px-8 py-5 text-lg font-bold hover:bg-yellow-500"
          >
            送信
          </button>
        </form>
      </div>
    </main>
  );
}