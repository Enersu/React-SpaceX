import React from 'react'

import './LaunchList.css'

import { Launch } from '../../interfaces'
import { LaunchItem } from '../LaunchItem/LaunchItem'

interface LaunchListProps {
    launches: Launch[];
    launchSiteNameFilter: string;
    rocketNameFilter: string;
}

export const LaunchList: React.FC<LaunchListProps> = ({launches, launchSiteNameFilter, rocketNameFilter}) => {

    const filteredLaunches: Launch[] = launches.filter((launch: Launch) => {
        const rocketName: string = launch.rocket.rocket_name;
        const launchSiteName: string = launch.launch_site.site_name;
        return (!rocketNameFilter || rocketName === rocketNameFilter)
            && (!launchSiteNameFilter || launchSiteName === launchSiteNameFilter) ;
    });

    return (
        <main className='launch-list'>
            {
                (filteredLaunches && filteredLaunches.length > 0)
                    ? filteredLaunches.map((launch: Launch): JSX.Element => 
                        <LaunchItem key={`${launch.launch_date_unix}_${launch.flight_number}`}
                               launch={launch}
                        />
                     )
                    : 'No matching data for your request...'
            }
        </main>
    )
}