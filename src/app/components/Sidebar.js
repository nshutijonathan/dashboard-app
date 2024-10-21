"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();



  //handle logout and remove the user from localStorage
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <ul className="space-y-2">
        <li>
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            href="/customers"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Customers
          </Link>
        </li>
        <li>
          <Link
            href="/websites"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Websites
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 rounded hover:bg-gray-700"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
