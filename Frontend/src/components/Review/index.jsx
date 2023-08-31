import React from "react";
import "./Review.css"; // Import your CSS file

const Review = ({
  businessDetails,
  selectedProvider,
  balanceSheetData,
  onSubmit,
}) => {
  const handleReviewComplete = () => {
    onSubmit();
  };
  const { businessName, yearEstablished, loanAmount } = businessDetails;
  return (
    <div className="review-container">
      <h2 className="review-title">Review</h2>
      <div className="review-section">
        <h3>Business Details:</h3>
        <p>Name: {businessName}</p>
        <p>Year Established: {yearEstablished}</p>
        <p>Loan Amount: {loanAmount}</p>
      </div>
      <div className="review-section">
        <h3>Selected Accounting Provider:</h3>
        <p>{selectedProvider}</p>
      </div>
      <div className="review-section">
        <h3>Balance Sheet:</h3>

        <div className="table-container">
          {balanceSheetData?.length ? (
            <table className="balance-sheet-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Month</th>
                  <th>Profit/Loss</th>
                  <th>Assets</th>
                </tr>
              </thead>
              <tbody>
                {balanceSheetData?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.year}</td>
                    <td>{item.month}</td>
                    <td>{item.profitOrLoss}</td>
                    <td>{item.assetsValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
      <button className="submit-button" onClick={handleReviewComplete}>
        Submit Application
      </button>
    </div>
  );
};

export default Review;
