import React from 'react'

const MemberDetails = ({ name, designation }) => {
    return (
        <div className='mt-4 flex flex-col gap-1 justify-center items-center cursor-pointer'>
            <span className=''>{name}</span>
            <span className='text-purple-600 font-medium font-serif'>{designation}</span>
        </div>
    )
}

export default MemberDetails
