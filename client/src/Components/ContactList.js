import Contact from "./Contact";

function ContactList (props) {

  const contacts = props.list.map((contact, key) => {
    return <Contact contact={contact} setList={props.setList} key={key} />
  })
  return (
    <>
    {contacts}
    </>
  )
}

export default ContactList;