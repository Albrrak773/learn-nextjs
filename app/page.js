import { useState } from 'react';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1)
    console.log("increment like count")
  }

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return <div>
    <Header title="Develop. Preview. Ship." fuck='you' />
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
    <button onClick={handleClick}>Like {likes}</button>
  </div>
}

