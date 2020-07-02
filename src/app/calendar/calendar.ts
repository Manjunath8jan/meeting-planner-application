import { Time } from '@angular/common';

export interface CalendarInterface{
    id:number;
    name:string;
    startDate:Date;
    //startTime:Time;
    endDate:Date;
    //endTime:Time;
}

export interface CalendataResolved{
    CalendarInterface: CalendarInterface;
    error?:any;
    
}