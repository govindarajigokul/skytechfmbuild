import React from 'react'
import '../css/calltoaction.css'
import { useNavigate } from 'react-router-dom';

const CalltoAction = () => {
  const navigate = useNavigate();
  return (
    <div className='calltoaction'>
        <h1>Need a Facility Management Solution?</h1>
        <div className='callbtn' onClick={() => navigate('/quote')} >
            Request a Quote
        </div>
    </div>
  )
}

export default CalltoAction