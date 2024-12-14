/* eslint-disable react-hooks/exhaustive-deps */
import { CardanoWallet, useWallet } from "@meshsdk/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const policyId = process.env.NEXT_PUBLIC_POLICY_ID;
const assetName = process.env.NEXT_PUBLIC_TOKEN_NAME;

export default function LoginPage() {
  const { wallet, connected } = useWallet();
  const router = useRouter();
  const [assetExist, setAssetExist] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Please connect your wallet");

  useEffect(() => {
    if (connected) {
      checkAssetCredential();
    } else {
      clearStates();
    }
  }, [connected]);

  async function clearStates() {
    setAssetExist(false);
    setMessage("Please connect your wallet");
  }

  async function checkAssetCredential() {
    const assets = await wallet.getAssets();
    const isExist =
      assets.find(
        (asset) => asset.policyId === policyId && asset.assetName === assetName
      ) !== undefined;

    if (isExist) {
      setAssetExist(true);
      setMessage("Member token found");
    } else {
      setMessage("Member token not found");
    }
  }

  function loginHandler() {
    if (assetExist) {
      router.push("/member");
    } else {
      return;
    }
  }

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="p-6 border border-black rounded-xl flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-bold mb-1">
          Web3 Login System
        </h1>
        {assetExist && (
          <p className="text-green-500 text-center text-sm font-semibold mb-6">
            {message}
          </p>
        )}
        {!assetExist && (
          <p className="text-red-500 text-center text-sm font-semibold mb-6">
            {message}
          </p>
        )}
        <div className="flex justify-center items-center mb-6">
          <CardanoWallet label={"Hubungkan Dompet"} />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-600 hover:bg-blue-500 px-3 py-2 w-full rounded-xl text-white font-semibold"
            onClick={loginHandler}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
