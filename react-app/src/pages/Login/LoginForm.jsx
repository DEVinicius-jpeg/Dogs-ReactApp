import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function LoginForm() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event){
    event.preventDefault()
    try{
      const userToken = await (await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({userName, password})
        }
      )).json()

      console.log(userToken)

    }catch(err){
      console.log(err)
    }

  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>

        <Input label="Usuário" type="text" name="userName"/>
        <Input label="Senha" type="password" name="password"/>

        <Button>Entrar</Button>

      </form>
      <Link to='/login/criar'> Cadastro </Link>
    </section>
  )
}
