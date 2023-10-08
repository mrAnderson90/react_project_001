import React from "react";

export default function UsersTable({ users }) {
    users.forEach((user)=> {
        console.log(user)
    })
    return (
        <div>
           <table>
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Surname</th>
								<th>Birthday</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>{user.id}</td>
									<td>{user.name}</td>
									<td>{user.surname}</td>
									<td>{user.birthData.toLocaleDateString('ru-RU')}</td>
									<td>{user.email}</td>
								</tr>
							))}
						</tbody>
					 </table>
        </div>
    );
}

