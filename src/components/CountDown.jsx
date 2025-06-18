"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2025-09-19T15:00:00"); // ajusta a tu fecha
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const countdownStyle = {
    color: "var(--green-soft)",
    fontWeight: 500,
    fontSize: "1.8rem",
    textAlign: "center",
  };
  return (
    <div style={countdownStyle}>
      <p>
        {timeLeft.days} días, {timeLeft.hours} horas,
        <br /> {timeLeft.minutes} minutos, {timeLeft.seconds} segundos
      </p>
    </div>
  );
}
