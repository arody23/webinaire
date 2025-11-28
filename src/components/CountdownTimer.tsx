import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to December 20, 2025
    const targetDate = new Date("2025-12-20T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 p-4 md:p-6 min-w-[70px] md:min-w-[100px] backdrop-blur shadow-glow animate-pulse-slow">
        <div className="text-3xl md:text-5xl font-black text-primary">
          {String(value).padStart(2, "0")}
        </div>
      </Card>
      <span className="text-xs md:text-sm text-muted-foreground mt-2 font-semibold uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-2 md:gap-4 justify-center">
      <TimeUnit value={timeLeft.days} label="Jours" />
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Secondes" />
    </div>
  );
};
