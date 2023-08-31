import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AccountingProviderSelect from "./index";

describe("AccountingProviderSelect", () => {
  it("should render correctly", () => {
    render(<AccountingProviderSelect onSelect={() => {}} />);

    expect(screen.getByText("Select Accounting Provider")).toBeInTheDocument();
    expect(screen.getByText("Select Provider")).toBeInTheDocument();
    expect(screen.getByText("Xero")).toBeInTheDocument();
    expect(screen.getByText("MYOB")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("should call onSelect function with selected provider", () => {
    const mockOnSelect = jest.fn();
    render(<AccountingProviderSelect onSelect={mockOnSelect} />);

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Xero" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(mockOnSelect).toHaveBeenCalledWith("Xero");
  });
});
