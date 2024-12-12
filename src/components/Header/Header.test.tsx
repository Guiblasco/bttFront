import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given th Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Club Btt La Valldigna' as a text", () => {
      const titleRegExp = new RegExp("Club btt la valldigna", "i");

      render(<Header />);

      const headerTitle = screen.getByText(titleRegExp);

      expect(headerTitle).toBeInTheDocument();
    });

    test("Then it should show a club's logo as an image", () => {
      const imageAlternativeTextRegExp = new RegExp("Logo del club", "i");

      render(<Header />);

      const imageClub = screen.getByAltText(imageAlternativeTextRegExp);

      expect(imageClub).toBeInTheDocument();
    });
  });
});
