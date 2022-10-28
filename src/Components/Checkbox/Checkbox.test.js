import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox.jsx";

it("Should toggle checked value when clicked", () => {
    
    const setPH = () => {
        console.log("You toggled PH in app.js");
    }
    
        render(<Checkbox setIsPH={setPH}/>);
      
        const ph = screen.getByRole("checkbox", { id: 2} );
        expect(ph).toHaveProperty('checked', false);

        userEvent.click(ph);
      
        expect(ph).toHaveProperty('checked', true);
      });