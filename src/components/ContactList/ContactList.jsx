import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
