export const Contacts = ({ userData }) => {
    const users = userData.contacts
       const usersList = users.map((user) => (
           <li key={user.id}>{user.name}: {user.number}</li>
    ));

    return (
        <div>
            <p>Contacts</p>
            <ul>{usersList}</ul>
        </div>
    );
}