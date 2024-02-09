import React from 'react'
import MemberImage from './MemberImage'
import MemberDetails from './MemberDetails'

const TeamMember = ({ id, image, name, designation, }) => {

    return (

        <div className='w-72 flex flex-col justify-center items-center mt-4'>
            <MemberImage image={image} />
            <MemberDetails name={name} designation={designation} />
        </div>
    )
}

export default TeamMember
