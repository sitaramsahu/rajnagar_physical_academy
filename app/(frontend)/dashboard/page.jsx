"use client";

import { useSession, signOut } from "next-auth/react";

export default function page() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>You must log in first.</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">User Dashboard</h1>
      <p>Welcome to the User Dashboard!</p>
      <p>Here you can manage your application settings and user accounts.</p>
      <p>
        Use the navigation menu to access different sections of the dashboard.
      </p>
      <p>For more information, refer to the documentation.</p>
      <button
        onClick={() => signOut({ callbackUrl: "/srs-admin" })}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
      <button
        onClick={() => (window.location.href = "/profile")}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
      >
        Profile
      </button>
    </div>
  );
}
