
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading } from '../../redux/contacts/selectors';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';

export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            {/* <PageTitle>Your Phonebook</PageTitle> */}
            <ContactForm />
            <div>{isLoading && "Request in progress..."}</div>
            <SearchBox/>
            <ContactList />
        </>
    );
}