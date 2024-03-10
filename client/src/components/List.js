import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function List() {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('http://localhost:4000/users').then( (response) => response.json()).then(data => setUsers(data));
    }, []);
    
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>Фамилия</th>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Отчество</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user) => (<tr key={user.id}>          
                            <th scope='row'>
                                <Link to={`/edit/${user.id}`}>{user.surname}</Link>
                            </th>            
                            <td>{user.name}</td>
                            <td>{user.fatherName}</td>
                            <td>
                                <button className='btn btn-danger' onClick={ () => {
                                fetch(`http://localhost:4000/users/${user.id}`, {method: 'DELETE'}).then( () => {
                                    setUsers( (prev) => prev.filter( (us) => us.id !== user.id));
                                });
                                }}>Удалить</button>
                            </td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default List