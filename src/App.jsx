import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { RiContactsBook2Fill } from "react-icons/ri";
import "./App.css";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMassage";

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
      {error && <ErrorMessage />}
      {!loading && !error && <ContactList />}
    </div>
  );
}

export default App;
