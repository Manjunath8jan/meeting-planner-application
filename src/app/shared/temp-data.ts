import { InMemoryDbService } from 'angular-in-memory-web-api';

import { CalendarInterface } from '../calendar/calendar';
import { User } from '../users/user';
import { mainModule } from 'process';

export class TempData implements InMemoryDbService {

  createDb() {
    const calendarEvents: CalendarInterface[] = [
      {
        id:343,
        name: 'firstEvent',
        startDate: new Date('2020-06-27T10:20:30Z'),
        endDate: new Date('2020-06-28T10:20:30Z')
      },
      {
        id:343,
        name: 'secondEvent',
        startDate: new Date('2020-06-29T12:20:30Z'),
        endDate: new Date('2020-06-30T12:20:30Z')
      }
    ];

    return { calendarEvents };
  }
}
