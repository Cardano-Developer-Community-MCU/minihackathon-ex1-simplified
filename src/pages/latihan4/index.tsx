/* eslint-disable react-hooks/exhaustive-deps */
import { CardanoWallet, useWallet } from "@meshsdk/react";
import { useState, useEffect } from "react";

export default function Page() {
  const { wallet, connected } = useWallet();
  const [walletAddress, setWalletAddress] = useState<string | undefined>("");

  useEffect(() => {
    if (connected) {
      afterConnectedWallet();
    } else {
      setWalletAddress("");
    }
  }, [connected]);

  async function afterConnectedWallet() {
    const address = await wallet.getChangeAddress();
    setWalletAddress(address);
  }

  return (
    <main>
      {/* NAVBAR */}
      <div className="bg-blue-800 p-6 h-20 flex justify-end items-center">
        <CardanoWallet label={"Hubungkan Dompet"} />
      </div>
      {/* CONTENT */}
      <p className="text-center mt-64 font-bold">
        Wallet Address = {walletAddress}
      </p>
    </main>
  );
}
