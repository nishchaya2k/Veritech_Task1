import React from 'react'
import BookmarkHeading from '../components/BookmarkHeading'
import CompanyDescription from '../components/CompanyDescription'
import Divider from '../components/Divider'
import TeamDetails from '../components/teamDetails/TeamDetails'



const Home = () => {
    return (
        <div className='w-screen p-4'>
            <div className='w-full m-auto border border-black bg-gray-200'>
                <BookmarkHeading left={false} middle={false} right={true} />    {/* starting */}
                <BookmarkHeading left={false} middle={true} right={false} companyHeading={"Veritech Software Services"} />
                <CompanyDescription />
                <Divider />
                <h2 className='mt-12 mb-12 text-center text-2xl font-bold'>Meet Our Team</h2>
                <TeamDetails />
                <BookmarkHeading left={true} middle={false} right={false} />    {/* Last */}

            </div>
        </div>
    )
}

export default Home;
