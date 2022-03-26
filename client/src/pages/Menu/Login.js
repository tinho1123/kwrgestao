import React, { useState } from 'react'

import Axios from 'axios';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {
    if( email.includes('@') && email.includes('.com') && senha > 6) {
      const user = Axios.get('http://localhost:5000/getuser')
        .then(result => console.log(result.data))
        .catch(err => console.log(err));
        console.log(navigate('/gestao-de-pedidos'))
        return user;
    } else {

    }
  }

  return (
    <div className='background'>
      <div className='menu'>
          <h2 className='titulo-menu'>KWR Gestão de pedidos</h2>
          <div className='form'>
            <div className='email'>
              <h2 className='text_input_email'>Digite seu email:</h2>
              <input
                id='input_email'
                type='email'
                name='input_email'
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='password'>
              <h2 className='text_input_senha'>Digite sua senha:</h2>
              <input
                type="password"
                name='password'
                id='input_senha'
                placeholder='Digite sua senha'
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button
              className='button_form'
              type='button'
              onClick={handleClick}
            >
              Logar
            </button>
          </div>
      </div>

    </div>
  )
}
