import React from 'react';

function LoginForm(props) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin()
    }}>
        <h2 className="mediumHeader">Login</h2>
        <div className="loginFormOpacity">
           <h3>Email:</h3>
           <input onChange={props.handleChange}
                  name="email"
                  value={props.login.login.email}
                  className="loginInputs" />
           <br></br>
           <h3>Password:</h3>
           <input type="password"
                  onChange={props.handleChange}
                  name="password"
                  value={props.login.login.password}
                  className="loginInputs" />
           <br></br>
           <button type="submit" className="loginBtn">Login</button>
        </div>
        <ul className="examplesofPasswords">You might try to use the logins and passwords:
          <li>login: 1@gmail.com; password: 1</li>
          <li>login: 2@gmail.com; password: 2</li>
          <li>etc</li>
        </ul>
    </form>
  )
}

export default LoginForm;
