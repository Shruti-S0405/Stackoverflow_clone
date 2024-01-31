import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({question}) => {
  const votes = question.upVote.length - question.downVote.length;
  return (
    <div className='display-question-container'>
        <div className='display-votes-ans'>
           <div> <span>{votes}</span>
              <span> votes </span></div>
            <div><span>{question.noofAnswers}</span>
              <span> Answers </span></div>
            <div><span>0</span>
              <span> Views </span></div>
        </div>

        <div className='display-question-details'>
            <div><Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link> </div> 
                <div className='display-tags-time'>
                <div className='display-tags'>
                   {
                     question.questionTags.map((tag)=>(
                     <p className='cmn-tags' key={tag}> {tag}</p>
                         ))
                    }
                </div>
                   <p className='display-time'>
                   { question.userPosted} asked {moment(question.askedon).fromNow()}
                    </p>
                </div>
        </div>
      
    </div>
  )
}

export default Questions
