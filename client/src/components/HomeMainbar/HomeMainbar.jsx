import React from 'react'
import { useLocation } from 'react-router-dom'
import {useSelector} from 'react-redux'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useNavigate} from 'react-router-dom'


const HomeMainbar = () => {
  const user  = 1;
  const navigate = useNavigate()

  const questionsList = useSelector(state =>state.questionReducer)

  const location = useLocation()
  const checkAuth = () => {
    if (user === null){
      alert('login or signup to ask question ')
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
      <button onClick={checkAuth} className='ask-btn'> Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ? 
          <h1> Loading...</h1> :
          <>  
              <p>{questionsList.data.length} Questions </p>
              <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
      
    </div>
  )
}

export default HomeMainbar
