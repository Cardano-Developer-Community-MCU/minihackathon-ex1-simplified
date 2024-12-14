import { useRouter } from "next/router";

export default function MemberPage() {
  const router = useRouter();

  return (
    <main className="flex-col justify-center items-center">
      {/* NAVBAR */}
      <div className="bg-black p-6 h-20 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Member Page</h1>
        <button
          className="bg-red-700 hover:bg-red-600 px-3 py-2 rounded-xl text-white font-bold"
          onClick={() => router.push("/")}
        >
          Logout
        </button>
      </div>
      {/* CONTENT */}
      <div className="flex justify-center items-center mt-64">
        <h1 className="text-4xl font-bold">Welcome Member</h1>
      </div>
    </main>
  );
}
