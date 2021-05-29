import React, { useState } from 'react'
import PersonForm from './PersonForm.js'
import ContactList from './Contacts'
import Filter from './Filter'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [filteredPersons, setFilteredPersons] = useState(persons.concat());
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('');
  const [ newSearch, setSearch] = useState('');


  const addPerson = (event) => {
    event.preventDefault();
    const persObj = {
      name: newName,
      number: newNumber,
    };
    if( !persons.some(e => e.name === newName) && !persons.some(e => e.number === newNumber) ) {
      setPersons(persons.concat(persObj));
      setFilteredPersons(persons.concat(persObj));
      setSearch("");
      setNewName("");
      setNewNumber("");
    } else  {
      alert(`Name/Phone number already exists, try again!`);
      setNewName("");
      setNewNumber("");
    }
  }

  const handleNameUpdate = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberUpdate = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleSearchUpdate = (event) => {
    setSearch(event.target.value);
    if(event.target.value !== "")
    setFilteredPersons(persons.filter(pers => pers.name.toLowerCase().includes(event.target.value.toLowerCase())));
    else 
    setFilteredPersons(persons.concat([]));
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} handleSearchUpdate={handleSearchUpdate} filteredPersons={filteredPersons} />


      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} 
      newName={newName} handleNameUpdate={handleNameUpdate}
      newNumber={newNumber} handleNumberUpdate={handleNumberUpdate}
      />
      

      <h2>All Numbers</h2>
      <ContactList contacts={filteredPersons}/>
    </div>
  )
}

export default App