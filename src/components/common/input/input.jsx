 import React from 'react';
import classes from './input.module.css'

const isInvalid = ({valid, touched,}) => {
    return !valid &&  touched
}


const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.input];
    const htmlFor = `${inputType}-${Math.random()}`
    
   if (isInvalid(props)) {
        cls.push(classes.invalid)
    } 
    return ( 
     /*    <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                id={htmlFor}
                type={inputType} 
                value={props.value}
                onChange={props.onChange}
                placeholder={props.type}/>
                
            {
                props.errorMessage   ? <span>{props.errorMessage}</span> : null
                            
            } 
          
            
        </div> */
    <div className={cls.join(' ')}>
        <label htmlFor={htmlFor}>{props.label}</label>
        <div>
          <input
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            id={htmlFor}
            placeholder={props.type}
          />
          {props.errors && <p className="error">{props.errors}</p>}
        </div>
    </div>
      
        
    )
}

export default Input; 