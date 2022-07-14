import { useEffect, useState } from 'react';
import './App.css';
import InputFrom from './Components/InputForm';
import ContactList from './Components/ContactList';
import { getContacts } from './utils/contactService';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getContacts()
      .then(response => {
        setList(response)
      })
  }, []);

  return (
    <div className="App">
      <InputFrom setList={setList}/>
      <ContactList list={list} setList={setList}/>
    </div>
  );
}

export default App;
