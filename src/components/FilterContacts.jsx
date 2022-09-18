import { Component } from 'react';
import { nanoid } from 'nanoid'

export default class FilterContacts extends Component {
    state = {
        filter: ''
    }
    handleChangeFilter = (e) => {
        const { name, value } = e.target; 
        console.log(value);
        this.setState({
            [name]: value,
        })
    }
    
    filterId = nanoid();

    render() {
        const { filterId, handleChangeFilter } = this;
        return (
        <div>
            <label htmlFor={filterId}>Find contacts by name</label>
            <input
                    id={filterId}
                    type="text"
                    name="filter"
                    onChange={handleChangeFilter}
            />
        </div>
        
    )
    }
    
}

// const elements = items.filter((items.name === searchName) => {
//         return <li key={id}> {name}: +38{number}</li>
//     })
//     console.log(items);
//     return (
//             <ol>
//                 {elements}
//             </ol>
//     )