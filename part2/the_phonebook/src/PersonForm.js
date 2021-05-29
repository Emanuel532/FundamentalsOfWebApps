const PersonForm = (props) => {
    //console.log(props);
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameUpdate} />
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberUpdate} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
}

export default PersonForm;