import React from 'react'

const MemberImage = ({ image }) => {
    return (
        <div className='w-48 h-48 border-2 rounded-full bg-gray-500 bg-no-repeat bg-cover bg-top m-auto cursor-pointer' style={{ backgroundImage: `url(${image})` }}>
        </div>
    )
}

export default MemberImage
