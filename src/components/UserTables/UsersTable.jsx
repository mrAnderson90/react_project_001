import React from "react";

export default function UsersTable({ users }) {
    users.forEach((user)=> {
        console.log(user)
    })
    return (
        <div>
           table
        </div>
    );
}

