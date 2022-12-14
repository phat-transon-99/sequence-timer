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

  dropDatabase(
    successCallback: () => void,
    errorCallback: (error: SQLite.SQLError | Error) => void,
  ): void {
    this.database.transaction((transaction) => {
      transaction.executeSql(
        'DROP TABLE timers',
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
      errorCallback(new Error('Can not delete database'));
    });
  }

  createDatabase(
    successCallback: () => void,
    errorCallback: (error: SQLite.SQLError | Error) => void,
  ): void {
    this.database.transaction((transaction) => {
      transaction.executeSql(
        'CREATE TABLE IF NOT EXISTS timers (_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), color VARCHAR(20), duration BIGINT)',
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
          'SELECT * FROM timers',
          [],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (_, { rows: { _array } }) => {
            resolve({
              body: _array.map((item) => ({
                // eslint-disable-next-line no-underscore-dangle
                id: item._id,
                name: item.name,
                color: item.color,
                duration: item.duration,
              })),
              error: false,
            });
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (_, e) => {
            resolve({
              body: undefined,
              error: e.message,
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
          'INSERT INTO timers (name, color, duration) VALUES (?, ?, ?)',
          [timer.name, timer.color, timer.duration],
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          () => {
            resolve({
              body: timer,
              error: false,
            });
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          (_, e) => {
            resolve({
              body: undefined,
              error: e.message,
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
