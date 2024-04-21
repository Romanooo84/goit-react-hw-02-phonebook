export const Contacts = ({ userData }) => {
    let usersList
    let letters = (userData.filter)
    let users
    if (userData.filter!=='') {
        const filtredData = userData.contacts.filter(contact =>
            contact.name.toLowerCase().includes(letters.toLowerCase())
        )
        console.log (filtredData)
        users = filtredData
    }
    else {
        users = userData.contacts
    }
        
    usersList = users.map((user) => (
            <li key={user.id}>{user.name}: {user.number}</li>
        ));
    

    return (
        <div>
            <p>Contacts</p>
            <ul>{usersList}</ul>
        </div>
    );
}