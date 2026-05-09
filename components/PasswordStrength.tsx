"use client";

type Strength = {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  color: string;
};

export function evaluatePassword(password: string): Strength {
  if (!password) {
    return { score: 0, label: "—", color: "bg-zinc-700" };
  }

  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length < 8) {
    return { score: 1, label: "Muito fraca", color: "bg-red-500" };
  }

  if (score <= 2) return { score: 1, label: "Fraca", color: "bg-red-500" };
  if (score === 3) return { score: 2, label: "Razoável", color: "bg-amber-500" };
  if (score === 4) return { score: 3, label: "Forte", color: "bg-emerald-500" };
  return { score: 4, label: "Muito forte", color: "bg-emerald-400" };
}

export default function PasswordStrength({ password }: { password: string }) {
  const { score, label, color } = evaluatePassword(password);
  const segments = 4;
  const filled = Math.min(score, segments);

  return (
    <div className="mt-2" aria-live="polite">
      <div className="flex gap-1">
        {Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-200 ${
              i < filled ? color : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
      <p className="mt-1 text-xs text-zinc-500">
        Força:{" "}
        <span className="font-medium text-zinc-300">{label}</span>
        {password && password.length < 8 && (
          <span className="ml-1 text-zinc-600">(mínimo 8 caracteres)</span>
        )}
      </p>
    </div>
  );
}
