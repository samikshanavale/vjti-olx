import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 flex flex-col items-center justify-center text-white'>

            <div className='logo font-bold text-white text-2xl'>
                <span className='text-green-700'>&lt;</span>
                Pass
                <span className='text-green-700'>OP/&gt;</span>
            </div>

            <div className='flex'>
                Made with   <img src="icons/heart.png" alt="love" width={25}  className='mx-2' />   by samiksha.navale
            </div>
        </div>
    )
}

export default Footer
