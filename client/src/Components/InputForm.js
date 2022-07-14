import { postContact } from "../utils/contactService";

function InputFrom (props) {

  function handleSubmit (event) {
    event.preventDefault();
    const contact = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      birthday: event.target.birthday.value,
      gender: event.target.gender.value,
      type: event.target.type.value
    }

    postContact(contact)
      .then(response => {
        props.setList(prevList => [...prevList, response])
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type='text' name='name'></input>
      </div>
      <div>
        <label>Phone: </label>
        <input type='text' name='phone'></input>
      </div>
      <div>
        <label>E-mail: </label>
        <input type='email' name='email'></input>
      </div>
      <div>
        <label>Birthday: </label>
        <input type='date' name='birthday'></input>
      </div>
      <div>
        <label>Gender: </label>
        <select name='gender'>
          <option />
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div>
        <label>Type: </label>
        <select name='type'>
          <option />
          <option>Personal</option>
          <option>Work</option>
        </select>
      </div>
      <button>Add Contact</button>
      
    </form>
    </>
  )
}

export default InputFrom;