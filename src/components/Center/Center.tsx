import React from 'react'
import './Center.css';

function Center(props: any) {
  return (
    <div className='center'>
        {props.children}
    </div>
  )
}

export default Center