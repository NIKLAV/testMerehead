import React, { useState, useRef } from 'react';
import classes from './auth.module.css'
import Button from '../common/button/button';
import Input from '../common/input/input';
import useForm from '../useForm';
import validateLogin from '../validateLogin';


 
const Login = (props) => {
  const { handleChange, handleSubmit, value, errors  }  = useForm(submit, validateLogin)
 
  function submit ()  {
      console.log('sdf')
  }
   
/*   const renderInputs = () => {
       
          return <>               
                <Input
                type='email'
                name='email'
                value={value.email}          
                onChange={handleChange}
                errorMessage={errors.email}                
                
                />
                <Input
                type='password'
                name='password'
                value={value.password}          
                onChange={handleChange}
                errorMessage={errors.password}
                />
                </>
            }
           
    
    
    return (
        <div className={classes.form}>
            <h1>А ну-ка, давай-ка залогинься!</h1>
            <form onSubmit={handleSubmit} noValidate>
                {renderInputs()}
                <Button  type="submit">Проникнуть</Button>
            </form>
        </div>
    )
} */

return (
    
      <form onSubmit={handleSubmit} noValidate>
     {/*    <div>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="email"
              type="email"
              value={value.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        </div> */}
        <Input
          errors={errors.email}
          label='Login'
          type='email'
          name='email'
          onChange={handleChange}
          value={value.email}
          
        />
        <Input
          errors={errors.password}
          label='Password'
          type='password'
          name='password'
          onChange={handleChange}
          value={value.password}
          
        />
        
        
        
        {/* <div>
          <label>Password</label>
          <div>
            <input
              className={`${errors.email && "inputError"}`}
              name="password"
              type="password"
              value={value.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
         </div> */}
         <Button  type="submit">Проникнуть</Button>
        </form>
    
        
)
}

export default Login;