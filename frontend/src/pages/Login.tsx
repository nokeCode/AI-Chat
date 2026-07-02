import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, MessageCircle } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // For now, just redirect to chat (no actual auth)
    if (email && password) {
      navigate("/chat");
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-cream">
      {/* Left side - Branding */}
      <div className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-brand to-brand/80 p-12 lg:flex">
        <div className="relative flex w-full max-w-sm flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
              <MessageCircle size={28} className="text-brand" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">AI Chat</h1>
              <p className="text-sm text-white/70">Your Personal Assistant</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Chat with AI
            </h2>
            <p className="text-white/80">
              Get instant answers to your questions, learn new concepts, and explore ideas with our AI assistant.
            </p>
          </div>

          <div className="text-center">
            <p className="text-white/60 text-sm">
              ✨ Powered by advanced AI technology
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-16 lg:w-1/2">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-ink">Welcome Back!</h1>
            <p className="mt-1 text-sm text-ink-muted">
              Sign in to continue chatting with AI
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="block">
              <span className="sr-only">Email</span>
              <input
                required
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl bg-cream-card px-4 py-3.5 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Password</span>
              <input
                required
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl bg-cream-card px-4 py-3.5 pr-11 text-sm text-ink placeholder:text-ink-soft focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft hover:text-ink"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>
            </label>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-gold px-4 py-3.5 text-sm font-semibold text-brand-darker transition-all hover:bg-gold/90 shadow-card hover:shadow-lg"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-ink-muted">
            <p>Demo account: Use any email and password</p>
          </div>
        </div>
      </div>
    </div>
  );
}
