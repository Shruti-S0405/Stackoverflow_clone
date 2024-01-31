import React from 'react'

const WidgetTags = () => {
    const tags =['c','css','python','java','mysql','php','react','node','linux','mern','mean','security']
  return (
    <div className='widget-tags'>
        <h4>Watched Tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag) =>(
                    <p className='cmn-tags' key={tag}>{tag}</p>
                ))
            }
        </div>
    </div>
  )
}
export default WidgetTags
