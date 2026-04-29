'use client'
import { useState } from 'react';
export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1)
    console.log("increment like count")
  }
  return <button onClick={handleClick}>Like {likes}</button>
}