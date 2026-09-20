import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  target: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: string): TimeLeft {
  const distance = Math.max(new Date(target).getTime() - Date.now(), 0);

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

export default function Countdown({ target }: CountdownProps) {
  const initial = useMemo(() => getTimeLeft(target), [target]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initial);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const units = [
    ["Días", timeLeft.days],
    ["Horas", timeLeft.hours],
    ["Min", timeLeft.minutes],
    ["Seg", timeLeft.seconds],
  ] as const;

  return (
    <div className="countdown" aria-label="Cuenta regresiva para el matrimonio">
      {units.map(([label, value]) => (
        <div className="countdown__item" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
