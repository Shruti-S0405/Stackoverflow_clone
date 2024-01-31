import React from 'react'

const TagsList = ({tag}) => {
  return (
    <div className='tag'>
        <h5 className='cmn-tags'>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsList
