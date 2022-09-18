
export default function Contacts({ items, removeContact }) {
    const elements = items.map(({ id, name, number }) => {
        return  <li key={id}> {name}: +38{number}
                    <button type='button' onClick={() => removeContact(id)}> Delete
                    </button>
                </li>
    })
    return (
            <ol>
                {elements}
            </ol>
    )
}