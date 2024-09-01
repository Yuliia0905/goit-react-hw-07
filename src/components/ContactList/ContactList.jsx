import { useSelector } from "react-redux";
import { selectError, selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  return (
    <ul className={css.list}>
      {filteredContacts.length === 0 && !error ? (
        <ErrorMessage message="No contacts available. Please add some contacts." />
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))
      )}
    </ul>
  );
};

export default ContactList;
