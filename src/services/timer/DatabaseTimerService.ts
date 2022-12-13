import * as SQLite from 'expo-sqlite';
import TimerService from './TimerService';
import ServiceModel from '../../models/ServiceModel';
import Timer from '../../models/Timer';

class DatabaseTimerService implements TimerService {
  private database: SQLite.Database;

  private static readonly DATABASE_NAME = 'timer_db.db';

  constructor() {
    this.database = SQLite.openDatabase(DatabaseTimerService.DATABASE_NAME);
  }

  createDatabase(
    successCallback: () => void,
    errorCallback: (error: SQLite.SQLError | Error) => void,
  ): void {
    this.database.transaction((transaction) => {
      transaction.executeSql(
        'CREATE TABLE IF NOT EXISTS timers (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(255), color VARCHAR(20), duration BIGINT)',
        [],
        () => {
          successCallback();
        },
        (_, error) => {
          errorCallback(error);
          return true;
        },
      );
    }, () => {
      errorCallback(new Error('Can not create database'));
    });
  }

  getAllTimers(): Promise<ServiceModel<Timer[]>> {
    return new Promise((resolve) => {
      this.database.transaction((transaction) => {
        transaction.executeSql(
          'SELECT * FROM timer',
          [],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (_, { rows: { _array } }) => {
            resolve({
              body: _array,
              error: false,
            });
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          () => {
            resolve({
              body: undefined,
              error: 'Can not select from database',
            });
            return false;
          },
        );
      }, () => {
        resolve({
          body: undefined,
          error: 'Can not perform transaction',
        });
      });
    });
  }

  createTimer(timer: Timer): Promise<ServiceModel<Timer>> {
    return new Promise((resolve) => {
      this.database.transaction((transaction) => {
        transaction.executeSql(
          'INSERT INTO timers VALUES (?, ?, ?)',
          [timer.name, timer.color, timer.duration],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          () => {
            resolve({
              body: timer,
              error: false,
            });
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          () => {
            resolve({
              body: undefined,
              error: 'Can not insert to database',
            });
            return false;
          },
        );
      }, () => {
        resolve({
          body: undefined,
          error: 'Can not perform transaction',
        });
      });
    });
  }
}

export default new DatabaseTimerService();
