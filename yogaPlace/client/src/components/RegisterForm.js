import React from 'react';

function RegisterForm(props) {
  return (
    <form onSubmit={props.handleRegister} >
      <h2 className="mediumHeader">Register</h2>
      <div className="loginFormOpacity">
         <h3>Email:</h3>
         <input onChange={props.handleChange}
                name="email"
                value={props.register.register.email}
                className="loginInputs" />
         <br></br>
         <h3>Password:</h3>
         <input type="password"
                onChange={props.handleChange}
                name="password"
                value={props.register.register.password}
                className="loginInputs" />
         <br></br>
         <button type="submit" className="loginBtn">Submit</button>
      </div>
    </form>
  )
}

export default RegisterForm;
