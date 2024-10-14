import { Navbar } from "@/components/navbar";

import "./about.css";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about-container">
        <h2>About me</h2>
        <p>
          Elias Pereyra, software developer based in Argentina, with a lot of
          curiosity.
        </p>
      </section>
    </>
  );
}
