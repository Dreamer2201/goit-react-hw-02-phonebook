
export default function Contacts({ items }) {
    const elements = items.map(({ id, name, number }) => {
        return <li key={id}> {name}: +38{number}</li>
    })
    console.log(items);
    return (
            <ol>
                {elements}
            </ol>
    )
}