import { Navbar } from "@/components/navbar";

import "./about.css";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-container">
        <h2>About me</h2>
        <p>
          <a
            className="about-link"
            href="https://github.com/EliasPereyra"
            target="_blank"
            rel="noreferrer"
          >
            Elias Pereyra
          </a>
          , software developer based in 🇦🇷 Argentina
        </p>
      </section>
    </>
  );
}
