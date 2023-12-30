import "./App.css";
import {
  ApplyValidation,
  BasicForm,
  RegisterFields,
  IntegratedWithExistingForm,
  IntegratedWithUILib,
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
    </>
  );
}

export default App;
