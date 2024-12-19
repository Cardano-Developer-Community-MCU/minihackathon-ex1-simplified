import { CardanoWallet, useWallet } from "@meshsdk/react";

export default function Page() {
  const { wallet, connected } = useWallet();

  return (
    <main>
      {/* NAVBAR */}
      <div className="bg-blue-800 p-6 h-20 flex justify-end items-center">
        <CardanoWallet label={"Hubungkan Dompet"} />
      </div>
      {/* CONTENT */}
      {connected === false && (
        <p className="text-center mt-64 text-red-500 font-bold">
          Dompet belum terhubung
        </p>
      )}
      {connected === true && (
        <p className="text-center mt-64 text-green-500 font-bold">
          Dompet terhubung
        </p>
      )}
    </main>
  );
}
