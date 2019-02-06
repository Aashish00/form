export class LoggingService{
  logStatusChange(status: string){
    console.log('A Service status changed, new status: ' + status);
  }
}