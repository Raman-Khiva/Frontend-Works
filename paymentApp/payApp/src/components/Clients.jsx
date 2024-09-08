import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className='flex w-full justify-evenly items-center px-32 '>
     {clients.map((client)=>(
      <div id={client.id} className='flex justify-center items-center'>
        <img src={client.logo} alt={client.logo} width={150} />
      </div>
     ))}

    </section>
  )
}

export default Clients
