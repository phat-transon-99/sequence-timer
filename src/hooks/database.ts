import { useState } from 'react';
import BooleanHook from './types';
import database from '../services/timer/DatabaseTimerService';

const useDatabase: BooleanHook = () => {
  const [databaseCreated, setDatabaseCreated] = useState(false);

  database.createDatabase(
    () => {
      setDatabaseCreated(true);
    },
    () => {
      setDatabaseCreated(false);
    },
  );

  return databaseCreated;
};

export default useDatabase;
