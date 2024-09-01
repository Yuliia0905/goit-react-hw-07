import { RiContactsBook2Fill } from "react-icons/ri";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import Loader from "./components/Loader/Loader";

import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
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
      {loading && <Loader />}
      {error && (
        <ErrorMessage message="Failed to load contacts. Please try again later." />
      )}
      <ContactList />
    </div>
  );
}

export default App;
