import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load contact us component ", () => {
    render(<Contact/>);

    const allHeadings = screen.getAllByRole("heading");

    //assertion
    expect(allHeadings[0]).toBeInTheDocument(); // h1
    expect(allHeadings[1]).toBeInTheDocument(); // first h2
    expect(allHeadings[2]).toBeInTheDocument(); // second h2

});
test("Should check for button in contact us component ", () => {
    render(<Contact/>);

    const button = screen.getByRole("button");

    //assertion
    expect(button).toBeInTheDocument();

});