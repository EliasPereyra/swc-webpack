import { Navbar } from "@/components/navbar.jsx";
import { Card } from "@/components/card";

import "./App.css";

const cards = [
  {
    title: "Webpack, an extensible bundler",
    description:
      "You can add any kind of plugin you want to get the most out of Webpack",
  },
  {
    title: "SWC, a compiler",
    description:
      "A wonderful compiler written in Rust that can transpile JavaScript very fast",
  },
  {
    title: "Webpack with Rust",
    description: "A good combination which makes Webpack to work even faster",
  },
];

export default function MainApp() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <h1>Webpack with SWC</h1>
        <p className="main-description">
          Learn how to build a React SPA with <strong>Webpack</strong> and{" "}
          <strong>SWC</strong> from scratch and earn a better understanding of
          one of the most popular JavaScript build tools
        </p>
        <a href="https://github.com/EliasPereyra/swc-webpack">Get started</a>

        <ul className="card-container">
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
