import React from 'react'
import TeamMember from '../teamMembers/TeamMember'

const SalesMarketingTeam = ({ sales_marketing }) => {
    return (
        <div className='max-w-screen-xl max-lg:w-full mt-4 mb-4 flex items-center justify-center flex-wrap m-auto gap-4'>
            {
                sales_marketing.users.map((user) => (
                    <TeamMember key={user.id} id={user.id} image={user.image} name={user.name} designation={user.designation} />
                ))
            }
        </div>
    )
}

export default SalesMarketingTeam
