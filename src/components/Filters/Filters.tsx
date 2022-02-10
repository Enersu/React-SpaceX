import React from "react";

import './Filters.css';

import { Launch } from '../../interfaces';

interface FiltersProps {
    launches: Launch[];
    launchSiteNameFilter: string;
    rocketNameFilter: string;
    setLaunchSiteName: React.Dispatch<React.SetStateAction<string>>;
    setRocketName: React.Dispatch<React.SetStateAction<string>>;
}

export const Filters: React.FC<FiltersProps> = (props: FiltersProps) => {

    const {
        launches, 
        launchSiteNameFilter, 
        rocketNameFilter, 
        setLaunchSiteName, 
        setRocketName
    } = props;
    
    const launchSiteNames: string[] = launches.map((launch: Launch) => launch.launch_site.site_name);
    const uniqueLaunchSiteNames: string[] = [...Array.from(new Set(launchSiteNames))];

    const rocketNames: string[] = launches.map((launch: Launch) => launch.rocket.rocket_name);
    const uniqueRocketNames: string[] = [...Array.from(new Set(rocketNames))];

    const changeLaunchSiteName = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setLaunchSiteName(event.target.value);
    }                  
    const changeRocketName = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setRocketName(event.target.value);
    }
                                
    return(
        <div className='filters-container'>
            <select value={launchSiteNameFilter} className='launch-site-filter' name='launchSiteNames'
                    onChange={changeLaunchSiteName }>
                <option value=''>All Launch Site</option>
                {uniqueLaunchSiteNames.map((launchSiteName: string )=> {
                    return <option key={launchSiteName} value={launchSiteName}>
                        {launchSiteName}
                    </option>
                })}
            </select>

            <select value={rocketNameFilter} className='rocket-filter' name='rocketNames'
                    onChange={changeRocketName}>
                <option value=''>All Rocket</option>
                {uniqueRocketNames.map((rocketName: string) => {
                    return <option key={rocketName} value={rocketName}>
                        {rocketName}
                    </option>
                })}
            </select>
        </div>
    )
}