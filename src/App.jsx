import "./App.css";
import {
  ApplyValidation,
  BasicForm,
  RegisterFields,
  IntegratedWithExistingForm,
  IntegratedWithUILib,
  HandleErrors,
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
      <IntegratedWithUILib />
      <br />
      <HandleErrors />
      <br />
    </>
  );
}

export default App;
