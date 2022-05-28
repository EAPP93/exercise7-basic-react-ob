import React, { useState } from 'react'
import AxiosPure from '../pure/AxiosPure'

const Axioscontainer = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [joke, setJoke] = useState(localStorage.getItem('joke'))

  function getText () {
    AxiosPure()
    setJoke(localStorage.getItem('joke'))
    document.querySelector('.container__btn--like').removeAttribute('disabled', '')
    document.querySelector('.container__btn--dislike').removeAttribute('disabled', '')
  }

  function disableBtn () {
    document.querySelector('.container__btn--like').setAttribute('disabled', '')
    document.querySelector('.container__btn--dislike').setAttribute('disabled', '')
  }

  function like () {
    setLikes(likes + 1)
    disableBtn()
  }

  function dislike () {
    setDislikes(dislikes + 1)
    disableBtn()
  }

  return (
    <div className='container'>
      <div className='container__joke'>
        <p>{joke}</p>
      </div>
      <div className='container__score'>
        <div>
          <label htmlFor='likes'>likes</label>
          <p id='likes' >{likes}</p>
        </div>
        <div>
          <label htmlFor='dislike'>dislikes</label>
          <p id='dislike' >{dislikes}</p>
        </div>
      </div>
      <div className='container__btn'>
        <button className='container__btn--new' onClick={getText}>New Joke</button>
        <button className='container__btn--like' onClick={like} >Like</button>
        <button className='container__btn--dislike' onClick={dislike}>Dislike</button>
      </div>
    </div>
  )
}

export default Axioscontainer
