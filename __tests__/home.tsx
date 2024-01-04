import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import "@testing-library/jest-dom";

describe("Home component", () => {
  test("renders the main section", () => {
    render(<Home />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
  });

  test('renders the "Get started by editing" text', () => {
    render(<Home />);
    const textElement = screen.getByText(/Get started by editing/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders the code file path", () => {
    render(<Home />);
    const codeElement = screen.getByText(/app\/page.tsx/i);
    expect(codeElement).toBeInTheDocument();
  });

  test("renders the Vercel logo", () => {
    render(<Home />);
    const logoElement = screen.getByAltText(/Vercel Logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test("renders the Next.js logo", () => {
    render(<Home />);
    const logoElement = screen.getByAltText(/Next.js Logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the "Docs" link', () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", { name: /Docs/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the "Learn" link', () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", { name: /Learn/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the "Templates" link', () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", { name: /Templates/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders the "Deploy" link', () => {
    render(<Home />);
    const linkElement = screen.getByRole("link", { name: /Deploy/i });
    expect(linkElement).toBeInTheDocument();
  });
});
