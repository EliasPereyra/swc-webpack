/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./pages/about";

test("About page renders correctly", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <About />
    </MemoryRouter>
  );

  await waitFor(() => expect(screen.getByText(/About me/i)));
});
