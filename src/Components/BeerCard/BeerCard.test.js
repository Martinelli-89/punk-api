import {render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard.jsx";


it("Should render mock data", () => {
    
const mockBeerData = {
    name: "Southville Hop",
    tagline: "A great IPA",
    abv: 7.3,
    ph: 5.6
}

    render(<BeerCard beer={mockBeerData}/>);
  
    const tagline = screen.getByText(/A great IPA/i);
    const ibu = screen.queryByText(/IBU/i);
  
    expect(tagline).toBeInTheDocument();
    expect(ibu).toBeFalsy();
  });