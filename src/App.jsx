import "./App.css";
import {
  ApplyValidation,
  BasicForm,
  RegisterFields,
  IntegratedWithExistingForm,
} from "./forms/index";

function App() {
  return (
    <>
      <BasicForm />
      <br />
      <RegisterFields />
      <br />
      <ApplyValidation />
      <br />
      <IntegratedWithExistingForm />
      <br />
    </>
  );
}

export default App;
