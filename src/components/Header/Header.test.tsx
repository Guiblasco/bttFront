import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given th Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Club Btt La Valldigna' as a text", () => {
      const titleRegExp = new RegExp("Club btt la valldigna", "i");

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );

      const headerTitle = screen.getByText(titleRegExp);

      expect(headerTitle).toBeInTheDocument();
    });

    test("Then it should show a club's logo as an image", () => {
      const imageAlternativeTextRegExp = new RegExp("Logo del club", "i");

      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>,
      );
      const imageClub = screen.getByAltText(imageAlternativeTextRegExp);

      expect(imageClub).toBeInTheDocument();
    });
  });
});
