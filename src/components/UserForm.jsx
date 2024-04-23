/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './styles/userForm.css';

const UserForm = ({createUser, updateUser, editUser, setUpdateUser, isOpen, setIsOpen}) => {
    /** first_name, last_name, email, password, birthday */

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
      if (updateUser) {
        reset(updateUser);
        setIsOpen(true);
      }
    }, [updateUser])
    

    const submit = data => {
        if (updateUser) {
          editUser('users', data, updateUser.id);
          setUpdateUser();
        } else {
            createUser('users',data);
        }
        setIsOpen(false);
        reset({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          birthday: '',
        });
    }

    const handleClose = () => {
      setIsOpen(false);
      setUpdateUser();
      reset({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: '',
      });
    }

  return (
    <div className={`form__back ${isOpen && 'active'}`}>
      <form className='form' onSubmit={handleSubmit(submit)}>

        
        <button onClick={handleClose} type='button' className='form__close'>X</button>
        <h2 className='form__title'>USER FORM</h2>
        <div className='form__item'>
            <label  htmlFor='first_name'>First_name</label>
            <input className='form__input' {...register('first_name')} id='first_name' type="text" />
        </div>
        <div className='form__item' >
            <label htmlFor='last_name'>Last_name</label>
            <input className='form__input' {...register('last_name')} id='last_name' type="text" />
        </div>
        <div className='form__item'>
            <label htmlFor='email'>Email</label>
            <input className='form__input' {...register('email')} id='email' type="text" />
        </div>
        <div className='form__item'>
            <label htmlFor='password'>Password</label>
            <input className='form__input' {...register('password')} id='password' type="password" />
        </div>
        <div className='form__item'>
            <label htmlFor='birthday'>Birthday</label>
            <input className='form__input'{...register('birthday')} id='birthday' type="date" />
        </div>
        <button className='form__btn'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm;
