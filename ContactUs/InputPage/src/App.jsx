import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactBody from "./components/contactBody/ContactBody";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <Navigation />
      <div className="bodyBox">
        <ContactHeader />
        <Form />
        <ContactBody />
      </div>
    </>
  );
}

export default App;
