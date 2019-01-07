import React from 'react';

function RegisterForm(props) {
  return (
    <form onSubmit={props.handleRegister}>
      <h2>Register</h2>
      <h3>Email:</h3>
      <input onChange={props.handleRegisterChange}
             name="email"
             value={props.register.email}/>
      <br></br>
      <h3>Password:</h3>
      <input onChange={props.handleRegisterChange}
             name="password_confirmation"
             value={props.register.password_confirmation}/>
    </form>
  )
}

export default RegisterForm;
