import * as React from 'react';
import './style/global.scss';

interface User {
  name: string;
  prenom: string;
}

export default function App() {
  const user: User = { name: 'Felix', prenom: 'Lucas' };
  return <h1>Manual configuration ( ReactJS, Babel, Webpack) </h1>;
  // return <h1>{'Welcome ' + user.name + user.prenom}</h1>;
}
