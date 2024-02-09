import React from 'react'
import response from '../../data';
import LeadershipTeam from './teams/LeadershipTeam';
import DevelopmentTeam from './teams/DevelopmentTeam';
import SalesMarketingTeam from './teams/SalesMarketingTeam';
import BookmarkHeading from '../BookmarkHeading';

const TeamDetails = () => {

    const { leadership, development, sales_marketing } = response;
    console.log(leadership);

    return (
        <div>
            <BookmarkHeading left={false} middle={true} right={false} departmentHeading={"Leadership / Management Team"} />
            <LeadershipTeam leadership={leadership} />

            <BookmarkHeading left={true} middle={true} right={false} departmentHeading={"Development Team"} />
            <DevelopmentTeam development={development} />

            <BookmarkHeading left={false} middle={true} right={true} departmentHeading={"Sales and Marketing Team"} />
            <SalesMarketingTeam sales_marketing={sales_marketing} />
        </div>
    )
}

export default TeamDetails
