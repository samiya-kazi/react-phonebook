import { deleteContact } from "../utils/contactService";
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

function Contact (props) {

  function handleDelete() {
    deleteContact(props.contact._id)
      .then(response => {
        props.setList(prevList => {
          const filteredList = prevList.filter(contact => contact._id !== response._id)
          return filteredList
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="contact">
      <h2>{props.contact.name}</h2>
      <div>
        <p>Phone: <span>{props.contact.phone}</span></p>
        <p>E-mail: <span>{props.contact.email}</span></p>
        <p>Birthday: <span>{format(parseISO(props.contact.birthday), 'do MMM, yyyy')}</span></p>
        <p>Gender: <span>{props.contact.gender}</span></p>
        <p>Type: <span>{props.contact.type}</span></p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Contact;