import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      ) : (
        <ErrorMessage message="No contacts available. Please add some contacts." />
      )}
    </>
  );
};

export default ContactList;
