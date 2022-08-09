import "./App.css";
import { Contact } from "./models/contact";
import UserStatus from "./components/UserStatus.jsx";

function App() {
    const defaultContact = new Contact(
        "John",
        "Smith",
        "johnsmith@mail.com",
        true
    );

    return (
        <div className="App">
            <UserStatus contact={defaultContact} />
        </div>
    );
}

export default App;
