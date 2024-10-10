/**
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import fetchMock from "jest-fetch-mock";

import MainApp from "./App";
import Posts from "./pages/posts";
import About from "./pages/about";
import Contact from "./pages/contact";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe("The app", () => {
  test("renders the posts page correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MainApp />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText("Webpack with SWC")));
  });

  test("renders the posts page correctly", async () => {
    fetch.mockResponseOnce(
      JSON.stringify([
        { id: 1, title: "sunt aut facere" },
        { id: 2, title: "qui est esse" },
      ])
    );

    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <Posts />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading..."));

    await waitFor(() => {
      expect(screen.getByText(/sunt aut facere/i));
      expect(screen.getByText(/qui est esse/i));
    });
  });

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
