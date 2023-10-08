import React from "react";
import UsersTable from "../UserTables/UsersTable"
import { users } from "../UserTables/users"


export default function UserTables() {
    return (
        <div>
            <h1>Hello World</h1>
            <button>I'm a button</button>
            <UsersTable users={users}/>
        </div>
    );
}

