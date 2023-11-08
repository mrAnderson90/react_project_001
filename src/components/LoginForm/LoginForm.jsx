import { useState } from 'react';
import './LoginForm.css';

const LoginForm = (props) => {
  const { setActive } = props;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin('');
    setPassword('');
    setActive(false);
  };

  return (
    <div className="form">
      <div className="form__header">
        <h3>Login Form</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="login">Логин</label>
          <input
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            name="login"
            value={login}
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Пароль</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            value={password}
          />
        </div>
        <div className="form__footer">
          <input
            className="login__btn"
            type="submit"
            name="login"
            value="Войти"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
