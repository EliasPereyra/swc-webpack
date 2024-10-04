import ReactDOM from "react-dom/client";
import { MainRouter } from "./routes";

import("@/reset.css");

ReactDOM.createRoot(document.getElementById("root")).render(<MainRouter />);
