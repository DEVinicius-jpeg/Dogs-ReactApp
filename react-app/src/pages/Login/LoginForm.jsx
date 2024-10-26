import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import {UserContext} from '../../context/UserContext';

export default function LoginForm() {

  const userName = useForm();
  const password = useForm();
  const { userLogin } = useContext(UserContext)

  async function handleSubmit(event){
    event.preventDefault()
    if(userName.validate() && password.validate()){
      try{
        userLogin(userName.value, password.value);
      }catch(err){
        console.log(err)
      }
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>

        <Input label="Usuário" type="text" name="userName" {...userName}/>
        <Input label="Senha" type="password" name="password" {...password}/>

        <Button>Entrar</Button>

      </form>
      <Link to='/login/criar'> Cadastro </Link>
    </section>
  )
}
