import React, { useState } from 'react'

const LoginPage = ({loginUser}) => {

  const Inicial_state = {
    email: "",
    password: "",
  }
 
  const [formUser, setFormUser] = useState(Inicial_state);

  const handleInput =(e)=>{
    const {id, value}= e.target;
    setFormUser({...formUser, [id]:value})
  }

  const onSubmit = (e)=> {
    e.preventDefault()
    const{email, password} = formUser;
    loginUser({email, password})
  }
  return (

    
    <div className='formLogin'>
      <form onSubmit={onSubmit}>
      <legend>
      <label className='formLogin-label' htmlFor='email'>Email</label>
      <input className='formLogin-input' type="text" id="email" value={formUser.email} onchange={handleInput}/>
      </legend>
      <legend>
      <label className='formLogin-label' htmlFor='password'>Password</label>
      <input className='formLogin-input' type="text" id="password" value={formUser.password} onchange={handleInput}/>
      </legend>
      <button className='formLogin-btn'type='submit'>Login</button>
      
      </form>
    </div>
  )
}

export default LoginPage