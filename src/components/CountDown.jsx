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
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
  };

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const circleBaseStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "normal",
    marginBottom: "4px",
  };

  const daysStyle = {
    ...circleBaseStyle,
    backgroundColor: "var(--dark-wine)",
  };

  const hoursStyle = {
    ...circleBaseStyle,
    backgroundColor: "var(--wine2)",
  };

  const minutesStyle = {
    ...circleBaseStyle,
    backgroundColor: "var(--wine3)",
  };

  const secondsStyle = {
    ...circleBaseStyle,
    backgroundColor: "var(--wine4)",
  };
  const text = {
    color: "var(--text1)",
    fontSize: "1.4rem",
    fontWeight: "300",
  };

  return (
    <div style={countdownStyle}>
      <div style={itemStyle}>
        <div style={daysStyle}>{timeLeft.days}</div>
        <h4 style={text}>días</h4>
      </div>
      <div style={itemStyle}>
        <div style={hoursStyle}>{timeLeft.hours}</div>
        <h4 style={text}>horas</h4>
      </div>
      <div style={itemStyle}>
        <div style={minutesStyle}>{timeLeft.minutes}</div>
        <h4 style={text}>minutos</h4>
      </div>
      <div style={itemStyle}>
        <div style={secondsStyle}>{timeLeft.seconds}</div>
        <h4 style={text}>segundos</h4>
      </div>
    </div>
  );
}
