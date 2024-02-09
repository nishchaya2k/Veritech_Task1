import React from 'react'
import TeamMember from '../teamMembers/TeamMember'

const LeadershipTeam = ({ leadership }) => {
    console.log(leadership.users)
    return (
        <div className='max-w-screen-xl max-lg:w-full mt-4 mb-4 flex items-center justify-center flex-wrap gap-4 m-auto'>

            {/*first row */}
            <div className='w-full flex flex-wrap justify-center gap-4'>
                {
                    leadership.users.slice(0, 2).map((user) => (
                        <TeamMember
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            designation={user.designation} />
                    ))
                }
            </div>

            {/* second row */}
            <div className='w-full flex flex-wrap justify-center gap-4'>
                {

                    leadership.users.slice(2).map((user) => (
                        <TeamMember
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            designation={user.designation} />
                    ))
                }
            </div>

        </div>
    )
}

export default LeadershipTeam


/*
1. To maintain company top leaders position, I need to use 2 rows. otherwise I can simple use
   flex-wrap-reverse
*/
