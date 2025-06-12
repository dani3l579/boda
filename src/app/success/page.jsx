"use client";

import { useEffect, useState } from "react";
import Countdown from "../../components/CountDown";

export default function SuccessPage() {
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("guestName");
    if (storedName) {
      setGuestName(storedName);
    }
  }, []);

  return (
    <main>
      <h1>🎊 ¡Código válido!</h1>
      {guestName ? (
        <p>
          ¡Bienvenido(a), <strong>{guestName}</strong>! <br />
          Te esperamos con mucho cariño en nuestra boda ❤️
        </p>
      ) : (
        <p>Te esperamos con mucho cariño en nuestra boda ❤️</p>
      )}

      <Countdown />
    </main>
  );
}
