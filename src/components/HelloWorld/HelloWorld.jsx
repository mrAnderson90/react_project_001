import { useState } from 'react';
import UsersTable from '../UserTables/UsersTable';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

import { users } from '../UserTables/users';

export default function UserTables() {
  const [isModalActive, setModalActive] = useState(false);

  return (
    <div>
      <h1>Hello World</h1>
      <button type="button" onClick={() => setModalActive(true)}>
        Open Modal
      </button>
      <UsersTable users={users} />
      <Modal isActive={isModalActive} setActive={setModalActive}>
        <LoginForm setActive={setModalActive} />
      </Modal>
    </div>
  );
}
