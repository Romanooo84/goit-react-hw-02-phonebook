export const TextInput = ({ onChange, onSubmit}) => {
    
    return (
    <div>  
        <p>Contacts</p>
        <form onSubmit={onSubmit}> 
            <p>Name</p>    
                <input
                type="text"
                name="name"
                id='id'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={onChange}
                />
                <button type='submit'>Add Contact</button>
                <p></p>
        </form> 
    </div>
    )
}