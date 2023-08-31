import React from "react";
import { render, screen } from "@testing-library/react";
import Result from "./index";

describe("Result", () => {
  const mockPreAssessment = "60%";

  it("should render correctly", () => {
    render(<Result preAssessment={mockPreAssessment} />);

    expect(screen.getByText("Application Result")).toBeInTheDocument();
    expect(screen.getByText(`Pre-Assessment: ${mockPreAssessment}`)).toBeInTheDocument();
  });
});
