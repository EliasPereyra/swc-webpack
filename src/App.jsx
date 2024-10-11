import { Navbar } from "@/components/navbar.jsx";

import "./App.css";

export default function MainApp() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <h1>Webpack with SWC</h1>
        <p>This is the main app</p>
      </main>
    </>
  );
}
