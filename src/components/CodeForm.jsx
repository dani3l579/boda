"use client";
import styles from "./CodeForm.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validCodes } from "../app/data/codes";

export default function CodeForm() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputCode = code.trim();

    // Validar que sea solo números
    const isNumeric = /^\d+$/.test(inputCode);

    if (!isNumeric) {
      // Si no es numérico, mandar a error directamente
      localStorage.removeItem("guestCode");
      localStorage.removeItem("guestName");
      router.push("/error");
      return;
    }

    // Buscar si el código existe
    const matchedGuest = validCodes.find((item) => item.code === inputCode);

    if (matchedGuest) {
      // Guardar en localStorage
      localStorage.setItem("guestCode", matchedGuest.code);
      localStorage.setItem("guestName", matchedGuest.guestName);

      router.push("/success");
    } else {
      // Limpiar localStorage en caso de error
      localStorage.removeItem("guestCode");
      localStorage.removeItem("guestName");

      router.push("/error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          placeholder="Numero de Invitación aquí"
        />
      </label>
      <button type="submit">
        <Image
          className={styles.image}
          src="/assets/flower1.svg"
          alt="Los novios felices"
          width={45}
          height={45}
        ></Image>
        {/* <Image
          className={styles.image2}
          src="/assets/flower2.svg"
          alt="Los novios felices"
          width={45}
          height={45}
        ></Image> */}
        Click Aquí! y Acompáñanos
      </button>
    </form>
  );
}
