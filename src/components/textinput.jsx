export const TextInput = ({ inputData, value, onSubmit}) => {
    
    return (
    <div>  
        <p>Contacts</p>
        <div> 
            <p>Name</p>    
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={inputData}
                />
                <button onClick={onSubmit}>Add Contact</button>
                <p>{value}</p>
        </div> 
    </div>
    )
}