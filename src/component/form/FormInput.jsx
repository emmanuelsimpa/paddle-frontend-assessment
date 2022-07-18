import React from 'react'
import './styles.scss'

export default function FormInput({handleChange, label, ...others}) {
  return (
    <div className="group">
        <input className="form-input" onChange={handleChange}  {...others}/>
        {
            label ? 
            <label className={`${others.value ? 'shrink' : ''} form-input-label`}>
                {label}
            </label> 
            : null
        } 
    </div>
  )
}

export const EmailForm = () => {
  return(
    <form class="search-wrapper cf">
        <input type="text" placeholder="Enter your email address..." required style={{boxShadow: 'none'}} />
        <button type="submit">Join our waiting list</button>
    </form>
  )
}
