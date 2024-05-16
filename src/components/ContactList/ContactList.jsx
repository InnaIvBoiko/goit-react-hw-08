import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
    const visibleContacts = useSelector(selectFilteredContacts);

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => {
                return(
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            )})}
        </ul>
    );
}