"use client";
import Image from "next/image";
import Countdown from "../../components/CountDown";
import styles from "./page.module.css";
import FechaSection from "@/components/FechaSection";
import LugarSection from "@/components/LugarSection";
import VestimentaSection from "@/components/VestimentaSection";
import SobreSection from "@/components/SobreSection";

export default function SuccessPage() {
  return (
    <main>
      <h1 className={styles.h1}>Tan solo queda</h1>
      <Countdown />
      <Image
        className={styles.image}
        src="/assets/flowersWelcome.svg"
        alt="Los novios felices"
        width={370}
        height={300}
      ></Image>
      <FechaSection></FechaSection>
      <LugarSection></LugarSection>
      <VestimentaSection></VestimentaSection>
      <SobreSection></SobreSection>
    </main>
  );
}
