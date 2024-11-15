import {React, useContext} from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import {UserContext} from '../../context/UserContext';
import Error from '../../helpers/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../../components/Button/style.module.css';

export default function LoginForm() {

  const userName = useForm();
  const password = useForm();
  const { userLogin, error, loading } = useContext(UserContext)

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
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>

        <Input label="Usuário" type="text" name="userName" {...userName}/>
        <Input label="Senha" type="password" name="password" {...password}/>

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        
        <Error error={error}/>

      </form>
      <Link className={styles.perdeu} to='/login/perdeu'> Perdeu a senha? </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to='/login/criar'> Cadastro </Link>
      </div>
    </section>
  )
}
