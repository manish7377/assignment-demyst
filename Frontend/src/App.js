import React, { useState } from "react";
import BusinessDetailsForm from "./components/BusinessDetailsForm";
import AccountingProviderSelect from "./components/AccountingProviderSelect";
import BalanceSheet from "./components/BalanceSheet";
import Review from "./components/Review";
import Result from "./components/Result";

const App = () => {
  const [step, setStep] = useState(1);
  const [businessDetails, setBusinessDetails] = useState({});
  const [selectedProvider, setSelectedProvider] = useState("");
  const [balanceSheetData, setBalanceSheetData] = useState([]);
  const [preAssessment, setPreAssessment] = useState("");

  const handleBusinessDetailsSubmit = (details) => {
    setBusinessDetails(details);
    setStep(step + 1);
  };
  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setStep(step + 1);
  };

  const handleBalanceSheetSubmit = (data) => {
    setBalanceSheetData(data);
    setStep(step + 1);
  };

  const handleReviewSubmit = async () => {
    try {
      const payload = {
        balanceSheetData,
        businessDetails,
      };
      const response = await fetch(
        "http://localhost:5001/api/getAssessmentValue",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const preAssessmentValue = await response.json();
      setPreAssessment(preAssessmentValue);
      setStep(step + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      {step === 1 && (
        <BusinessDetailsForm onSubmit={handleBusinessDetailsSubmit} />
      )}
      {step === 2 && (
        <AccountingProviderSelect onSelect={handleProviderSelect} />
      )}
      {step === 3 && (
        <BalanceSheet
          selectedProvider={selectedProvider}
          onSubmit={handleBalanceSheetSubmit}
        />
      )}
      {step === 4 && (
        <Review
          businessDetails={businessDetails}
          selectedProvider={selectedProvider}
          balanceSheetData={balanceSheetData}
          onSubmit={handleReviewSubmit}
        />
      )}
      {step === 5 && <Result preAssessment={preAssessment} />}
    </div>
  );
};

export default App;
