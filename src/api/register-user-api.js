import { config } from '../constants/config';

export async function postLogin(login) {
    
    let options = {
      method : 'POST',
      headers : {
          'Content-Type' : 'application/json',
      },
      body : JSON.stringify(login)
    }
    let response = await fetch(config.apiBaseUrl + 'users', options);
    let data = await response.json();
    console.log(data);

    return { response, data };
  }


