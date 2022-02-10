import React from 'react'
import { Launch } from '../../interfaces'

import './LaunchItem.css'

interface LaunchItemProps {
    launch: Launch;
}

export const LaunchItem: React.FC<LaunchItemProps> = ({launch}) => {

    const formatDate = (date: string): string => date.slice(0,10).split('-').reverse().join('.');
    const formattedDate: string = formatDate(launch.launch_date_local); 

    return (
        <div className='launch'>
            <div className='label'>
                {launch.links.mission_patch_small === null 
                    ? <img className='not-label' src='' alt='mission_patch_small' /> 
                    : <img src={launch.links.mission_patch_small} alt='mission_patch_small' />
                }
            </div>
            <div className='description'>
                <div className='date'>
                    <div>{launch.mission_name}</div>
                    <div>{formattedDate}</div>
                </div>
                <div className='text'>
                    {launch.details === null ? 'Upcoming' : <p>{launch.details}</p>}
                </div>
            </div>
        </div>
    )   
}
