const ContactList = ({contacts}) => {
    return (
      <div>
        {contacts.map(contact => 
        <ul key={contact.name}>
          {contact.name} {contact.number}
        </ul>)}
      </div>
    )
  }

  export default ContactList;