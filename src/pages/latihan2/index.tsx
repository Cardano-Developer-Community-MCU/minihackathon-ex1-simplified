import { CardanoWallet, useWallet, useAddress } from "@meshsdk/react";

export default function Page() {
  const { wallet, connected } = useWallet();
  const address = useAddress();

  return (
    <main>
      {/* NAVBAR */}
      <div className="bg-blue-800 p-6 h-20 flex justify-end items-center">
        <CardanoWallet label={"Hubungkan Dompet"} />
      </div>
      {/* CONTENT */}
      <p className="text-center mt-64 font-bold">Wallet Address = {address}</p>
    </main>
  );
}
