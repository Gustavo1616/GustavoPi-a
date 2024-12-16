import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
const CheckOutForm = () => {
    const [orderId, setOrderId] = useState('')
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()
    const {cart, cartTotal, clear} = useContext(CartContext)
  

    const onSubmit =(dataDelForm)=>{
        let order = {
            buyer :{
                name: dataDelForm.nombre,
                address: dataDelForm.direccion,
                email: dataDelForm.email1
            },
            carrito:cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, order)
        .then((res)=>{
          setOrderId(res.id)
          clear()
        })
        .catch((error)=>console.log(error))
    }

  return (
    <div>
      {orderId ? <div className='ordenCompra'>
        <h2>Muchas gracias por tu compra</h2>
        <h4>Tu numero de orden es: {orderId}</h4>
      </div>
      :
      <div>
      <h1 className='tituloCheckOut'>CheckOut</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='formularioCompra'>
        <input className='form' {...register('nombre', {required:true, minLength:3, pattern: /^[A-Za-z]+$/i})} placeholder='Ingrese su nombre'/>
        {errors?.nombre?.type === 'required' && <p style={{color:'red'}}>Complete con un nombre Valido.</p>}
        {errors?.nombre?.type === 'minLength' && <p style={{color:'red'}}>El nombre debe tener minimo 3 caracteres</p>}
        <input className='form' {...register('direccion', {required:true, minLength:10, maxLength: 40})} placeholder='Ingrese su Direccion'/>
        {errors?.direccion?.type === 'required' && <p style={{color:'red'}}>Complete con una direccion valida.</p>}
        {errors?.direccion?.type === 'minLength' && <p>Direccion </p>}
        <input type='email' name='email' {...register('email1',{required:true})} placeholder='Ingrese su Email'/>
        {errors?.email1?.type === "required" && <p style={{color:'red'}}>Por favor ingrese su Email</p>}
        <input className='form-control' type='email' name='email2' {...register("email2", {required:true, validate:{equalMails: email2 => email2 === getValues().email1}})} placeholder='Confirme su Email'/>
        {errors?.email2?.type === "required" && <p style={{color:'red'}}>Por favor complete el campo de Confirmación de email</p>}
        {errors?.email2?.type === "equalMails" && <p style={{color:'red'}}>Los emails deben ser iguales</p>}
        <button className='btn btn-succes' disabled={!cart.length}> Confirmar Compra</button>
      </form>
    </div>}
    </div>
  )
}

export default CheckOutForm
