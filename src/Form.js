import React, { useState } from 'react';
import supabase from './supabaseClient';

function Form() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <form className="rental-form">
      {step === 1 && (
        <>
          <fieldset>
            <legend>Applicant Information</legend>
            <label>Date of Application: <input type="date" /></label>
            <label>Property Address: <input type="text" /></label>
            <label>Full Name: <input type="text" /></label>
            <label>Home Phone: <input type="tel" /></label>
            <label>Alternative Phone: <input type="tel" /></label>
            <label>Social Security: <input type="text" /></label>
            <label>Date of Birth: <input type="date" /></label>
            <label>Driver's License Number: <input type="text" /></label>
            <label>State: <input type="text" /></label>
            <label>Email Address: <input type="email" /></label>

            <legend>Co-Applicant Information</legend>
            <label>Co-Applicant Name: <input type="text" /></label>
            <label>Social Security Number: <input type="text" /></label>
            <label>Date of Birth: <input type="date" /></label>
            <label>Driver's License Number: <input type="text" /></label>
            <label>State: <input type="text" /></label>
          </fieldset>
          <button type="button" onClick={nextStep}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <fieldset>
            <legend>Current Address</legend>
            <label>Address: <input type="text" /></label>
            <label>Apt#: <input type="text" /></label>
            <label>City: <input type="text" /></label>
            <label>State: <input type="text" /></label>
            <label>Zip: <input type="text" /></label>
            <label>Month/Year Moved In: <input type="month" /></label>
            <label>Rent: <input type="number" /></label>
            <label>Owner/Agent: <input type="text" /></label>
            <label>Phone: <input type="tel" /></label>
            <label>Reason for Leaving: <input type="text" /></label>

            <legend>Previous Address</legend>
            <label>Address: <input type="text" /></label>
            <label>Apt#: <input type="text" /></label>
            <label>City: <input type="text" /></label>
            <label>State: <input type="text" /></label>
            <label>Zip: <input type="text" /></label>
            <label>Month/Year Moved In: <input type="month" /></label>
            <label>Moved Out: <input type="month" /></label>
            <label>Rent: <input type="number" /></label>
            <label>Reason for Leaving: <input type="text" /></label>
            <label>Owner/Agent: <input type="text" /></label>
            <label>Phone: <input type="tel" /></label>
          </fieldset>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={nextStep}>Next</button>
        </>
      )}

      {step === 3 && (
        <>
          <fieldset>
            <legend>Background Information</legend>
            <label>Criminal or Drug Cases: <input type="checkbox" /> Yes</label>
            <label>Evicted from Residence: <input type="checkbox" /> Yes</label>
            <label>Late Payments in Past Year: <input type="checkbox" /> Yes</label>
            <label>Have Pets: <input type="checkbox" /> Yes</label>
            <label>Pet Details: <input type="text" /></label>

            <legend>Employment Information</legend>
            <label>Employer Name: <input type="text" /></label>
            <label>Dates Employed: <input type="text" /></label>
            <label>Position: <input type="text" /></label>
            <label>Supervisor Name: <input type="text" /></label>
            <label>Phone: <input type="tel" /></label>
            <label>Salary: <input type="number" /> per <input type="text" /></label>

            <legend>Vehicle Information</legend>
            <label>Make/Model: <input type="text" /></label>
            <label>Year: <input type="number" /></label>
            <label>License Plate: <input type="text" /></label>
            <label>State: <input type="text" /></label>
          </fieldset>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="button" onClick={nextStep}>Next</button>
        </>
      )}

      {step === 4 && (
        <>
          <fieldset>
            <legend>Authorization</legend>
            <p>I authorize an investigation of my credit, rental history, and employment for the purposes of renting a house from this owner/manager.</p>
            <label>Signature of Applicant 1: <input type="text" /></label>
            <label>Signature of Applicant 2: <input type="text" /></label>
            <label>Name of Applicant 1: <input type="text" /></label>
            <label>Name of Applicant 2: <input type="text" /></label>
          </fieldset>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit">Submit Application</button>
        </>
      )}
    </form>
  );
}

export default Form;
