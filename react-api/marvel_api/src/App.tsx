import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import { error } from 'console';

/* http://gateway.marvel.com/v1/public/comics? */

const baseUrl = 'http://gateway.marvel.com/v1/public/characters?'
const publicKey = '8e858de7ce67d5d86d38b7541ebf0437'
const privateKey = '7cd1fef9ca2ce802909d3f1c517d0ddb9f5e1f42'

const time = Number(new Date())
console.log(time);

/* baseUrl + 'ts=' + time + '&apikey=' + publicKey + '&hash=' + hash */

const hash = md5(time + privateKey + publicKey)

const App: React.FC = () => {
  useEffect(() => {
    /* axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`).then().catch() */
    axios
    .get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then(resposta => console.log(resposta))
    .catch(error => console.log (error))
  }, [])

  return (
    <div>
      API da Marvel
    </div>
  );
}

export default App;
