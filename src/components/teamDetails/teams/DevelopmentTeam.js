import React from 'react'
import TeamMember from '../teamMembers/TeamMember'

const DevelopmentTeam = ({ development }) => {
    return (

        <div className='max-w-screen-xl max-lg:w-full mt-4 mb-4  flex items-center justify-center flex-wrap gap-4 m-auto'>
            {
                development.users.map((user) => (
                    <TeamMember key={user.id} id={user.id} image={user.image} name={user.name} designation={user.designation} />
                ))
            }
        </div>

    )
}

export default DevelopmentTeam
