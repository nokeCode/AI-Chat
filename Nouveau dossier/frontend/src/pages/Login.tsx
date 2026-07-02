import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, BarChart3, TrendingUp, PieChart } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen w-full bg-cream">
      {/* Illustration side */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-cream-card p-12 lg:flex">
        <div className="relative flex w-full max-w-sm flex-col items-center gap-6">
          <div className="relative flex h-64 w-64 items-center justify-center">
            <div className="absolute h-56 w-56 rounded-full bg-gold/15" />
            <div className="absolute -left-4 top-6 flex h-20 w-16 flex-col justify-end gap-1 rounded-xl bg-white p-3 shadow-panel">
              <BarChart3 size={28} className="text-gold" />
            </div>
            <div className="absolute -right-2 top-2 flex h-20 w-20 items-center justify-center rounded-xl bg-brand p-3 shadow-panel">
              <PieChart size={28} className="text-gold" />
            </div>
            <div className="absolute bottom-2 right-6 flex h-16 w-24 items-center justify-center rounded-xl bg-white p-3 shadow-panel">
              <TrendingUp size={26} className="text-brand" />
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand shadow-panel">
              <span className="text-4xl">📊</span>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl font-bold text-ink">
              Manage sales, inventory
              <br />
              and other transactions
            </h2>
          </div>

          <div className="flex gap-2">
            <span className="h-2 w-6 rounded-full bg-gold" />
            <span className="h-2 w-2 rounded-full bg-black/15" />
            <span className="h-2 w-2 rounded-full bg-black/15" />
          </div>
        </div>
      </div>

      {/* Form side */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-16 lg:w-1/2">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-3xl font-bold text-ink">Welcome Back!</h1>
          <p className="mt-1 text-sm text-ink-muted">Please sign in to continue</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
            <label className="block">
              <span className="sr-only">Sales ID number</span>
              <input
                required
                placeholder="Sales ID number"
                className="w-full rounded-xl bg-cream-card px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Password</span>
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-xl bg-cream-card px-4 py-3.5 pr-11 text-sm text-ink placeholder:text-ink-soft"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gold py-3.5 text-sm font-semibold text-brand-darker transition-colors hover:bg-gold-dark"
            >
              Sign in
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-black/10" />
            <span className="text-xs text-ink-soft">or</span>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-3 text-sm font-medium text-ink">
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-600 text-[10px] font-bold text-white">
                f
              </span>
              Add Facebook account
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-3 text-sm font-medium text-ink">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-red-400 via-yellow-400 to-blue-500 text-[10px] font-bold text-white">
                G
              </span>
              Add Google account
            </button>
          </div>

          <div className="mt-6 flex items-center justify-between text-sm">
            <Link to="/forgot-password" className="font-medium text-blue-500 hover:underline">
              Forgot password?
            </Link>
            <p className="text-ink-muted">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-medium text-gold hover:underline">
                Go to Registration
              </Link>
            </p>
          </div>

          <p className="mt-10 text-center text-xs text-ink-soft">@ 2026 SmartPOS Setup</p>
        </div>
      </div>
    </div>
  );
}
