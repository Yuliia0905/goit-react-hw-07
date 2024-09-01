import { RiContactsBook2Fill } from "react-icons/ri";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="mainTitle">
        Phonebook <RiContactsBook2Fill />
      </h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage message="Failed to load contacts. Please try again later." />
      )}
      <ContactList />
    </div>
  );
}

export default App;
