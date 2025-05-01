import React from 'react'

const InfoPage = () => {
    return (
        <div className='bg-gray-100 m-0  flex justify-center h-[90vh] items-center'>
            <div className='bg-white md:shadow-md flex flex-col   w-[80vw] p-[2vw] rounded-3xl'>
                <h2 className='text-3xl font-bold text-center m-[10px]'>Information Page</h2>
                <div className='flex flex-col  mb-[10px]'>
                    <div className='flex justify-between'>
                        <span className='w-full m-2'>

                            <h4 className='mb-[5px] font-bold'>First Name</h4>
                            <input type="text" name='username' className='bg-gray-100 border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your name' />
                        </span>
                        <span className='w-full m-2'>
                            <h4 className='mb-[5px] font-bold'>Last Name</h4>
                            <input type="password" name='password' className='bg-gray-100 border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your password' />
                        </span>
                    </div>
                    <div className='flex'>
                        <span className='w-full m-2'>

                            <h4 className='mb-[5px] font-bold'>Email</h4>
                            <input type="text" name='username' className=' bg-gray-100  border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your name' />
                        </span>
                        <span className='w-full m-2'>
                            <h4 className='mb-[5px] font-bold'>Phone No</h4>
                            <input type="password" name='password' className=' bg-gray-100  border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your password' />
                        </span>
                        <span className='w-full m-2'>
                            <h4 className='mb-[5px] font-bold'>age</h4>
                            <input type="password" name='password' className=' bg-gray-100  border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your password' />
                        </span>
                    </div>
                    <h4 className='mb-[5px] font-bold'>Address</h4>
                    <input type="text" name='username' className=' bg-gray-100  border-2 border-gray-300 rounded-xl p-2 mb-[20px]' placeholder='enter your name' />
                    <div className='flex justify-between'>
                        <span className='w-full m-2'>
                            <h4 className='mb-[5px] font-bold'>Country</h4>
                            <input type="password" name='password' className=' bg-gray-100  border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your password' />
                        </span>
                        <span className='w-full m-2'>
                            <h4 className='mb-[5px] font-bold'>Zip Code</h4>
                            <input type="password" name='password' className=' bg-gray-100  border-2 border-gray-300 rounded-xl p-2 mb-[10px] w-full' placeholder='enter your password' />
                        </span>
                    </div>
                </div>
                <button className='bg-orange-400 self-center rounded-xl w-[250px] h-[40px]' type='submit'>Submit</button>
            </div>
        </div>
    )
}

export default InfoPage
