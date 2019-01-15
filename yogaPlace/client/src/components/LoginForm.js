import React from 'react';

function LoginForm(props) {
  return (
    <form onSubmit={props.handleLogin}>
        <h2 className="mediumHeader">Login</h2>
        <div className="loginFormOpacity">
           <h3>Email:</h3>
           <input onChange={props.handleChange}
                  name="email"
                  value={props.login.login.email}
                  className="loginInputs" />
           <br></br>
           <h3>Password:</h3>
           <input onChange={props.handleChange}
                  name="password"
                  value={props.login.login.password}
                  className="loginInputs" />
           <br></br>
           <button type="submit" className="loginBtn">Login</button>
        </div>
    </form>
  )
}

export default LoginForm;
