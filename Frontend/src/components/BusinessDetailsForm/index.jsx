import React, { useState } from "react";
import { getListOfYears } from "../../UtilFunctions/getListOfYears";
import "./BusinessDetailsForm.css";

const BusinessDetailsForm = ({ onSubmit }) => {
  const [inputData, setInputData] = useState({});
  const startYear = 1900;
  const endYear = new Date().getFullYear();
  const {businessName,yearEstablished, loanAmount}= inputData;
  const isDisabled = !businessName || !yearEstablished || !loanAmount

  const onChangeInputFields = (data) => {
    setInputData({ ...inputData, [data.name]: data.value });
  };

  const handleSubmit = () => {
    onSubmit(inputData);
  };

  return (
    <div className="business-details-form">
      <h2 className="form-title">Business Details</h2>
      <input
        className="input-field"
        name="businessName"
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => onChangeInputFields(e.target)}
      />

      <select
        className="select-field"
        placeholder="Year Established"
        name="yearEstablished"
        onChange={(e) => onChangeInputFields(e.target)}
      >
        <option value="">Year Established</option>
        {getListOfYears(startYear, endYear)?.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <input
        className="input-field"
        name="loanAmount"
        type="number"
        placeholder="Loan amount"
        value={loanAmount}
        onChange={(e) => onChangeInputFields(e.target)}
      />

      <button disabled={isDisabled} className="submit-button" onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default BusinessDetailsForm;
