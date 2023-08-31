import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Review from "./index";

describe("Review", () => {
  const mockBusinessDetails = {
    businessName: "My Business",
    yearEstablished: "2020",
    loanAmount: "50000",
  };
  const mockSelectedProvider = "Xero";
  const mockBalanceSheetData = [
    {
      year: 2020,
      month: 12,
      profitOrLoss: 250000,
      assetsValue: 1234,
    },
  ];
  const mockOnSubmit = jest.fn();

  it("should render correctly", () => {
    render(
      <Review
        businessDetails={mockBusinessDetails}
        selectedProvider={mockSelectedProvider}
        balanceSheetData={mockBalanceSheetData}
        onSubmit={mockOnSubmit}
      />
    );

    expect(screen.getByText("Review")).toBeInTheDocument();
    expect(screen.getByText("Business Details:")).toBeInTheDocument();
    expect(screen.getByText("Selected Accounting Provider:")).toBeInTheDocument();
    expect(screen.getByText("Balance Sheet:")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Submit Application" })
    ).toBeInTheDocument();
  });

  it("should call onSubmit function on submit button click", () => {
    render(
      <Review
        businessDetails={mockBusinessDetails}
        selectedProvider={mockSelectedProvider}
        balanceSheetData={mockBalanceSheetData}
        onSubmit={mockOnSubmit}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: "Submit Application",
    });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
