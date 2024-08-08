import React from 'react'
import { Link } from 'react-router-dom'
const ScheduleAppointment = () => {
  return (
    <>
    <div className="schedule-appointment md:my-16 bg-veryLightBlue md:p-20 text-center flex flex-col justify-center md:gap-6 gap-2 rounded-tl-[100px] rounded-br-[100px]">
        <h1 className='text-6xl'>Schedule an Appointment today</h1>
        <p className='text-md text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <Link className='bg-primary p-2 mx-auto rounded-3xl text-white hover:bg-secondary w-52' to={'/book-an-appointment'}>Book an Appointment</Link>
    </div>
    </>
  )
}

export default ScheduleAppointment