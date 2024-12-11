import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../context/CartContext'

const CheckOutForm = () => {
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()
    const {cart, carTotal, clear} = useContext(CartContext)
    const onSubmit = (dataForm) => {

    }
  return (
    <div>
      <h1>CheckOut</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <imput className='form' {...register('nombre', {required:true, minLength:3, pattern: /^[A-Za-z]+$/i})}/>
        {errors?.nombre?.type === 'required' && <p style={{color:'red'}}>Complete con un nombre Valido.</p>}
        {errors?.nombre?.type === 'minLength' && <p style={{color:'red'}}>El nombre debe tener minimo 3 caracteres</p>}
        <label>Direccion</label>
        <imput className='form' {...register('direccion', {required:true, minLength:10, maxLength: 40})}/>
        {errors?.direccion?.type === 'required' && <p>Complete con una direccion valida.</p>}
        {errors?.direccion?.type === 'minLength' && <p>Direccion </p>}
      </form>
    </div>
  )
}

export default CheckOutForm
