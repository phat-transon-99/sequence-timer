import ServiceModel from '../../models/ServiceModel';
import Timer from '../../models/Timer';

export default interface TimerService {
  createTimer(timer: Timer): Promise<ServiceModel<Timer>>,
  // updateTimer(timer: Timer): Promise<ServiceModel<Timer>>
  getAllTimers(): Promise<ServiceModel<Timer[]>>
  // deleteTimer(timer: Timer): Promise<ServiceModel<Timer>>
}
