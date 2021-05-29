const Filter = (props) => {

    return (
        <div>
            filter with: <input value={props.newSearch} onChange={props.handleSearchUpdate} />
        </div>
    )
}

export default Filter;

/*
            <div>
        {props.filteredPersons.map(pers => 
        <ul key={pers.name}>
          {pers.name} {pers.number}
        </ul>)}
      </div>

      */