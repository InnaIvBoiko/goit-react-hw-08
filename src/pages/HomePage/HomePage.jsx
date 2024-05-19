import PageTitle from "../../components/PageTitle/PageTitle";
import { TiContacts } from "react-icons/ti";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        <span>W</span>
        elcome to your <br />
        <span>
          Contacts phonebook page
        </span>
      </PageTitle >
      <TiContacts size={200} color={'#243e36'}  />
    </div>
  );
}