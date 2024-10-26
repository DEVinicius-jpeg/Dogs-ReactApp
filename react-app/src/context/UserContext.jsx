import React, { createContext, useState, useEffect } from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from '../api/api.js';

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function autoLogin(){
      try{
        setLoading(true);
        setError(null);
        const token = window.localStorage.getItem('token');
        if(!token) return null;
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await fetch(url, options);
        if(!response.ok) throw new Error('Token inválido.');
        await getUser(token)
      }catch(err){
        console.log(err);
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    autoLogin()
  },[])

  async function getUser(token) {
    try {
      setLoading(true);
      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setLogin(true);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function userLogin(username, password) {
    try {
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout(){
    setData(null);
    setError(null);
    setLoading(false);
    setLogin('');
    window.localStorage.removeItem('token')
  }

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data }}>
      {children}
    </UserContext.Provider>
  );
}
