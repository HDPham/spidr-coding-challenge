import { useActionState } from "react";

function App() {
  const fieldNameMap: { [key: string]: string } = {
    firstName: "First Name",
    lastName: "Last Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    costEstimate: "Cost Estimate",
    secretPin: "Secret Spidr Pin",
  };

  function submitInterestForm(_: null, formData: FormData) {
    for (const [key, value] of formData.entries()) {
      console.log(`${fieldNameMap[key]}: ${value}`);
    }
    return null;
  }

  const [, formAction] = useActionState(submitInterestForm, null);

  return (
    <div className="container">
      <form action={formAction} className="form">
        <h1 className="title">Air Fryer Interest Form</h1>
        <div className="form-group">
          <label htmlFor="firstName">
            First name<b>*</b>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            Last name<b>*</b>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">
            Email address<b>*</b>
          </label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="costEstimate">
            Guess the air fryer's cost (dollar amount)<b>*</b>
          </label>
          <input
            type="number"
            id="costEstimate"
            name="costEstimate"
            className="input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="secretPin">
            Spidr PIN<b>*</b>
          </label>
          <input
            type="text"
            id="secretPin"
            name="secretPin"
            placeholder="####-####-####-####"
            className="input"
            required
            pattern="\d{4}-\d{4}-\d{4}-\d{4}"
          />
        </div>
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
