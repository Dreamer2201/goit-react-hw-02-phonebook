import { nanoid } from 'nanoid'

export default function FilterContacts({ onFilter }) { 
    const filterId = nanoid();
    return (
        <div>
            <label htmlFor={filterId}>Find contacts by name</label>
            <input
                id={filterId}
                type="text"
                name="filter"
                onChange={onFilter}
            />
        </div>      
    )
    }
