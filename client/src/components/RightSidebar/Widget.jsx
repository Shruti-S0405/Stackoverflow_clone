import React from 'react'
import './RightSidebar.css'
import message from '../../assets/message.svg'
import pen from '../../assets/pen.svg'
import blacklogo from '../../assets/black-logo.svg'

const Widget = () => {
  return (
    <div className='widget'> 
        <h4>The Overlow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="Pen" width={12} />
                <p>Letting algorithms guide our path to the next great invention</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="Pen" width={12} />
                <p>The half-life of developer skills is shrinking rapidly</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={message} alt="message" width={12} />
                <p>Sites can now request to enable a banner to warn about their policy on...</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blacklogo} alt="stack" width={12} />
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>
                <p>Letting algorithms guide our path to the next great invention</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>The half-life of developer skills is shrinking rapidly</p>
            </div>
        </div>
    </div>
  )
}

export default Widget
