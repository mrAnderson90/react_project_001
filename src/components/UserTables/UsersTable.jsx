import React from 'react';
import * as _ from 'lodash';

const { useState } = React;

export default function UsersTable({ users }) {
    const [userList, setUserList ] = useState(users);

		const sort = (coll, value) => _.sortBy(coll, (user) => user[value]);

		const handleSort = (e) => {
			const { id } = e.target;
			const sortedUserList = sort(userList, id);
			setUserList(sortedUserList);
		};

		const tableStyle = {
			'display': 'grid',
			'gridTemplateColumns': 'repeat(5, 10%)',
		};

    return (
        <div style={tableStyle}>
           <div id="id" onClick={handleSort}>ID</div>
           <div id="name" onClick={handleSort}>Name</div>
           <div id="surname" onClick={handleSort}>Surname</div>
           <div id="birthData" onClick={handleSort}>Birthday</div>
           <div id="email" onClick={handleSort}>Email</div>
					 {userList.map(({ id, name, surname, birthData, email }) => (
						<React.Fragment key={id}>
							<div>{id}</div>
							<div>{name}</div>
							<div>{surname}</div>
							<div>{birthData.toLocaleDateString('ru-RU')}</div>
							<div>{email}</div>
						</React.Fragment>
					 ))}
        </div>
    );
}

