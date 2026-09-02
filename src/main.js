import './style.css'
import { UsersApp } from './users/users-app';

document.querySelector('#app').innerHTML = `
  <div class="card"></div>
`;

const element = document.querySelector('.card');

await UsersApp(element);
