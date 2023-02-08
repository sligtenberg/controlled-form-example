import React, { useState } from 'react';

function ControlledForm() {
    const [searchInput, setFormInputValue] = useState("")

    const names = ["liz", "andy", "jake", "sarah", "john", "stephen", "will", "steph", "sally", "amy", "bill", "belle", "rob", "jones", "abby", "julia", "juliana", "julianna", "juliet"]
    const filteredNames = names.filter(name => name.includes(searchInput) ? true : false)
    const list = filteredNames.map(name => <div>{name}</div>)


    function handleFormInputChange(event) {
        event.preventDefault()
        setFormInputValue(event.target.value)
    }

    return (
        <div>
            <form>
                <label>Search: </label>
                <input value={searchInput} onChange={event => handleFormInputChange(event)}></input>
            </form>
            <div>Names: {list}</div>
        </div>
    )
}

export default ControlledForm;
