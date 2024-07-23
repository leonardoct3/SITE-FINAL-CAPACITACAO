import { useEffect, useState } from 'react';
import './users.css';

export function Users() {

    const [users, setUsers] = useState([]);


    async function fetchUsers() {
        let options = {
            method : 'GET',
            headers : {
                name : 'leo',
            }
        }
        let response = await fetch('http://localhost:8000/users', options);
        let data = await response.json();
        return data;
    }
    
    useEffect(() => {
        (async () => {
            let usersData = (await fetchUsers()).users;
            setUsers(usersData);
            console.log(usersData);
        })()
    }, []);

    return (
        <div>
          {users.map((user, index) => {
                return (
                    <div key={index} className="user">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )
          })}
        </div>
    )
}