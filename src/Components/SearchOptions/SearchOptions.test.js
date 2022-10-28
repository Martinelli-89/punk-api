import {render, screen } from "@testing-library/react";
import SearchOptions from "./SearchOptions.jsx";


it("Should render only the right searching options", () => {
    
    const mockOptions = ([["ABV", ["LESSER THEN", "GREATER THEN"]], ["IBU", ["LESSER THEN", "GREATER THEN"]], ["EBC", ["LESSER THEN", "GREATER THEN"]], ["BY DATE", ["BREWED BEFORE", "BREWED AFTER"]], ["BY NAME", ["ENTER NAME BELOW"]],["BY YEAST", ["ENTER YEAST BELOW. USE & FOR MORE VALUES"]],["BY HOP", ["ENTER HOP BELOW. USE & FOR MORE VALUES"]],["BY MALT", ["ENTER MALT BELOW. USE & FOR MORE VALUES"]]]);

    const mockSwipeParams = () => {
        return "I am mocking you baby";
    }

    const mock2ndSwipeParams = () => {
        return "I am mocking you again baby";
    }

    const mockSubmit = () => {
        return "Third mock";
    }

    render(<SearchOptions  options={mockOptions} swipeParams={mockSwipeParams} swipe2ndParam={mock2ndSwipeParams} submit={mockSubmit}/>);
  
    const mainParam = screen.getByText(/IBU/i);
    const secMainParam = screen.queryByText(/BY YEAST/i);
    const secondParam = screen.getByText(/LESSER THEN/i);
    const secSecondParam = screen.queryByText(/ENTER HOP BELOW. USE & FOR MORE VALUES/i);
  
    expect(mainParam).toBeInTheDocument();
    expect(secondParam).toBeInTheDocument();
    expect(secMainParam).toBeFalsy();
    expect(secSecondParam).toBeFalsy();
  });