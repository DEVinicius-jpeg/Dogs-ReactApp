import React, {useContext} from 'react'
import Input from '../Input'
import Button from '../Button'
import Error from '../../helpers/Error'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { USER_POST } from '../../api/api'
import { UserContext } from '../../context/UserContext'


export default function LoginCreate() {
  const {userLogin} = useContext(UserContext);
  const { request, loading, error } = useFetch();

  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  
  async function handleSubmit(event){
    try{
      event.preventDefault();
      const {url, options} = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value
      });
      const { response } = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>

        <Input label="Usuário" type="text" name="userName" {...username}/>
        <Input label="Email" type="email" name="email" {...email}/>
        <Input label="Senha" type="password" name="password" {...password}/>

        { loading ? (
          <Button disabled >Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error error={error}/>
      </form>
    </section>
  )
}
