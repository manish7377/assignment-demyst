import React, { useState } from "react";
import "./AccountingProviderSelect.css"; // Import your CSS file

const AccountingProviderSelect = ({ onSelect }) => {
  const [selectedProvider, setSelectedProvider] = useState("");
  const isDisabled = !selectedProvider;

  const handleSelect = () => {
    onSelect(selectedProvider);
  };

  return (
    <div className="accounting-provider-select">
      <h2 className="form-title">Select Accounting Provider</h2>
      <select
        className="select-field"
        value={selectedProvider}
        onChange={(e) => setSelectedProvider(e.target.value)}
      >
        <option value="">Select Provider</option>
        <option value="Xero">Xero</option>
        <option value="MYOB">MYOB</option>
      </select>
      <button
        disabled={isDisabled}
        className="submit-button"
        onClick={handleSelect}
      >
        Next
      </button>
    </div>
  );
};

export default AccountingProviderSelect;
