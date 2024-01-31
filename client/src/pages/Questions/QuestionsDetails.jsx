import React, {useState} from 'react'
import {useParams,Link, useNavigate, useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import up from '../../assets/up.svg'
import down from '../../assets/down.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {postAnswer, deleteQuestion, voteQuestion} from '../../actions/question'

const QuestionsDetails = () => {

    const {id} = useParams()
    const questionsList = useSelector(state =>state.questionReducer)
    const [Answer, setAnswer] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000' 

    const handlePostAns = (e, answerLength) =>{
        e.preventDefault();

        if ( User === null ){
            alert('login or signup to answer')
            navigate('/Auth')
        }else{
            if(Answer === '' ){
                alert('Enter a answer before sumiting')
            } else{
                dispatch(postAnswer({
                    id,
                    noOfAnswers: answerLength + 1,
                    answerBody: Answer,
                    userAnswered: User.result.name,
                    userId: User.result._id}))
                // dispatch()
            } } }

    const handleShare = () =>{
        copy( url+location.pathname)
        alert('Copied url :' +url+location.pathname)
    }

    const handleDelete = ()=>{
        dispatch(deleteQuestion(id, navigate))
    }

    const handleUpVote = ()=>{
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }
    const handleDownVote = ()=>{
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }


    return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
        <h1>Loading..</h1> :
        <>
            {
                    questionsList.data.filter(question => question._id === id).map(question =>(
                    <div key={question._id}>
                        {/* {console.log(question)} */}
                        <section className='question-details-container'>
                            <h1>{question.questionTitle}</h1>
                            <div className='question-details-container-2'>
                                <div className="question-votes">

                                    <img src={up} alt="" width={18} className='votes-icon' onClick={handleUpVote}/>
                                    <p>{question.upVote.length - question.downVote.length}</p>
                                    <img src={down} alt="" width={18} className='votes-icon' onClick={handleDownVote}/>

                                </div>
                                <div style={{width:'100%'}}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-details-tags'>
                                        {
                                            question.questionTags.map((tag) =>(
                                                <p className='cmn-tags' key={tag}>
                                                    {tag}
                                                </p>
                                            ))
                                        }
                                    </div>
                                    <div className="question-actions-user">
                                        <div>
                                            <button type='button' onClick={handleShare}>share</button> 
                                            {
                                                User?.result?._id === question?.userId && (
                                                    <button type='button' onClick={handleDelete}>Delete</button>
                                                )
                                            }
                                        </div>
                                        <div>
                                            <p>Asked On {moment( question.askedOn).fromNow()}</p>  
                                            <Link to={`/User/${question.userId}` } className='user-link' style={{color:'#0086d8'}}>
                                               <Avatar backgroundColor='orange' px='8px' py='5px'> {question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                               <div> { question.userPosted } </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>
                        {
                            question.noofAnswers !== 0 && (
                                <section>
                                    <h3>{question.noofAnswers}</h3>
                                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                                </section>
                            )
                        }
                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form onSubmit={(e) => {handlePostAns( e, question.answer.length )}} >

                                <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                                <input type="submit" className='post-ans-btn' value='Post your answer'/>

                            </form>
                            <p>Browse other questions tagged 
                                {
                                    question.questionTags.map((tag)=>(
                                        <Link to='Tags' key={tag} className='ans-tags' style={{textDecoration:'none'}}> {tag} </Link>
                                    ))
                                } 
                                or <Link to='/AskQuestion' style={{textDecoration:'none'}}> Ask your own Question</Link>
                                </p>

                        </section>
                    </div>
                    ))
            }

        </>
      }
    </div>
  )
}

export default QuestionsDetails
