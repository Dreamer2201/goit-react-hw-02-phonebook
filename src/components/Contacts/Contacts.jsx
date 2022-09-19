import { ContactsList, ContactItem, DeleteContactBtn } from './ContactsStyled';

export default function Contacts({ items, deleteContact }) {
    const elements = items.map(({ id, name, number }) => {
        return  <ContactItem key={id}> {name}: +38{number}
                    <DeleteContactBtn type='button' onClick={() => deleteContact(id)}> Delete
                    </DeleteContactBtn>
                </ContactItem>
    })
    return (
            <ContactsList>
                {elements}
            </ContactsList>
    )
}