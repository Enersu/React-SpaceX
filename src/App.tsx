import React, { useState } from 'react';

import './App.css';

import { Filters } from './components/Filters/Filters';
import { LaunchList } from './components/LaunchList/LaunchList';
import { useLaunches } from './hooks/useLaunches';

const App: React.FC = () => {

  const {launches, isLoading} = useLaunches()

  const [launchSiteNameFilter, setLaunchSiteName] = useState<string>('');
  const [rocketNameFilter, setRocketName] = useState<string>('');

  return (  
    <div className='wrapper'>
      <h1 className='title'>Launches</h1>

      {isLoading
        ? 'data is loading...'
        : <>
            <Filters launches={launches}
                      launchSiteNameFilter ={launchSiteNameFilter}
                      rocketNameFilter={rocketNameFilter}
                      setLaunchSiteName={setLaunchSiteName}
                      setRocketName={setRocketName}/>
            <LaunchList launches={launches}
                  launchSiteNameFilter={launchSiteNameFilter}
                  rocketNameFilter={rocketNameFilter} />
          </>   
      }
    </div>
  );
}

export default App;


