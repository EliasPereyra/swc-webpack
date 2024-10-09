/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";

import About from "./pages/about";
import Contact from "./pages/contact";
import MainApp from "./App";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("The app", () => {
  test("renders the about page correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <About />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText(/About me/i)));
  });

  test("renders the contact page correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <Contact />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText(/Contact me/i)));
  });
});
