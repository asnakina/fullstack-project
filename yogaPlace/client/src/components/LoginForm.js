import React from 'react';

function LoginForm(props) {
  return (
    <form onSubmit={props.handleLogin}>
        <h2>Login</h2>
        <h3>Email:</h3>
        <input onChange={props.handleChange}
               name="email"
               value={props.login.email} />
        <br></br>
        <h3>Password:</h3>
        <input onChange={props.handleChange}
               name="password"
               value={props.login.password} />
        <br></br>
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm;
