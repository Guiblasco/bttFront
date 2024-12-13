import { render, screen } from "@testing-library/react";
import NavMenu from "./NavMenu";
import { MemoryRouter } from "react-router-dom";

describe("Given the NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 4 links with names: Inicio, Club, Contacto, Calendario", () => {
      const inicioRegExp = new RegExp("inicio", "i");
      const clubRegExp = new RegExp("club", "i");
      const contactoRegExp = new RegExp("contacto", "i");
      const calendarioRegExp = new RegExp("calendario", "i");

      render(
        <MemoryRouter>
          <NavMenu />
        </MemoryRouter>,
      );

      const inicioLink = screen.getByRole("link", { name: inicioRegExp });
      const clubLink = screen.getByRole("link", { name: clubRegExp });
      const contactoLink = screen.getByRole("link", { name: contactoRegExp });
      const calendarioLink = screen.getByRole("link", {
        name: calendarioRegExp,
      });

      expect(inicioLink).toBeInTheDocument();
      expect(clubLink).toBeInTheDocument();
      expect(contactoLink).toBeInTheDocument();
      expect(calendarioLink).toBeInTheDocument();
    });
  });
});
