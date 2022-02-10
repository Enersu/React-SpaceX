import { useEffect, useState } from 'react';
import { Launch } from '../interfaces';

const LAUNCHES_URL: string = 'https://api.spacexdata.com/v3/launches';

export const useLaunches = () => {
    const [launches, setLaunches] = useState<Launch[]> ([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchLaunches = () => {
          setLoading(true);
          fetch (LAUNCHES_URL)
              .then((response) => response.json())
              .then((launches) => setLaunches(launches))
              .finally(() => setLoading(false))
        };
    
        fetchLaunches();
      }, []);

      return {isLoading, launches};
}