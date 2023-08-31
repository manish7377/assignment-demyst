import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BusinessDetailsForm from "./index";

describe("BusinessDetailsForm", () => {
  const mockOnSubmit = jest.fn();

  it("should render correctly", () => {
    render(<BusinessDetailsForm onSubmit={mockOnSubmit} />);

    expect(screen.getByText("Business Details")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Business Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Year Established")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Loan amount")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("should submit the form with input data", () => {
    render(<BusinessDetailsForm onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Business Name"), {
      target: { value: "My Business" },
    });
    fireEvent.change(screen.getByPlaceholderText("Year Established"), {
      target: { value: "2020" },
    });
    fireEvent.change(screen.getByPlaceholderText("Loan amount"), {
      target: { value: "50000" },
    });

    fireEvent.click(screen.getByText("Next"));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      businessName: "My Business",
      yearEstablished: "2020",
      loanAmount: "50000",
    });
  });
});
