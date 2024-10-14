import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Annonce from "./components/annonce"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div>
        <h1>Bonjour</h1>
        <p>Test neuil</p>
        <h2>eaiozghezrhgzerkhgierhgzeuihg</h2>
        <Annonce/>
      </div>
    </>
  );
}
