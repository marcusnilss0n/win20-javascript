import { v4 } from 'uuid';
import axios from 'axios';
import { helloWorld, javaScriptDoesntCare } from './messages';

const HelloWorldElement = document.createElement('p');
HelloWorldElement.innerHTML = `${helloWorld}<br>${javaScriptDoesntCare}`;
document.body.appendChild(HelloWorldElement);

const uuidElement = document.createElement('p');
uuidElement.innerText = v4();
document.body.appendChild(uuidElement);

async function getFilms() {
  const result = await axios.get('https://swapi.dev/api/films/');
  const list = document.createElement('ul');
  result.data.results.forEach((film) => {
    const listItem = document.createElement('li');
    listItem.innerText = film.title;
    list.appendChild(listItem);
  });
  document.body.appendChild(list);
}

getFilms();
