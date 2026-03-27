"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(params.get("from") || "/");
      router.refresh();
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B3E] flex flex-col items-center justify-center px-4">
      {/* Logo bar */}
      <div className="mb-10 flex flex-col items-center gap-4">
        <Image
          src="/images/logo-pmc-business.svg"
          alt="Power Mac Center Business"
          width={180}
          height={36}
          priority
        />
        <Image
          src="/images/apple-partner-badge.svg"
          alt="Apple Partner"
          width={120}
          height={18}
          priority
        />
      </div>

      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-[#1A3A6B] px-6 py-5">
          <h1 className="text-white font-bold text-lg leading-tight">
            Partner Access
          </h1>
          <p className="text-blue-200 text-sm mt-1">
            Enter your access code to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5"
            >
              Access Code
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="••••••••••"
              autoComplete="current-password"
              className={`w-full px-4 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                error
                  ? "border-red-400 focus:ring-red-200 bg-red-50"
                  : "border-gray-200 focus:ring-blue-200 focus:border-blue-400"
              }`}
            />
            {error && (
              <p className="mt-1.5 text-xs text-red-500 font-medium">
                Incorrect access code. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {loading ? "Verifying…" : "Access Portal"}
          </button>
        </form>
      </div>

      <p className="mt-8 text-[#3B5490] text-xs text-center">
        © 2026 Power Mac Center. Apple Premium Partner.
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
