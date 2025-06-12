"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2025-09-19T14:30:00");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Actualizar cada segundo
    const intervalId = setInterval(updateCountdown, 1000);

    // Actualizar inmediatamente al montar
    updateCountdown();

    // Limpiar intervalo al desmontar
    return () => clearInterval(intervalId);
  }, [weddingDate]);

  return (
    <div>
      <h2>⏳ Cuenta regresiva para la boda:</h2>
      <p>
        {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes}{" "}
        minutos, {timeLeft.seconds} segundos
      </p>
    </div>
  );
}
