import "./App.css";
import {
  ApplyValidation,
  BasicForm,
  RegisterFields,
  IntegratedWithExistingForm,
  IntegratedWithUILib,
  HandleErrors,
  SchemaValidation,
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
      <SchemaValidation />
      <br />
    </>
  );
}

export default App;
