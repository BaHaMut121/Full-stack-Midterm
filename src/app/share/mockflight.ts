import { Flight } from "../flight/flight";


export class bookdata {
  public static mfData: Flight[] = [
    {
      fullName: 'Jetsadapon Chagpeauk',
      from: 'Thailand',
      to: 'Laos',
      type: 'One way',
      departure: new Date('07-03-2565'),
      arrival: new Date('08-03-2565'),
      adults: 1,
      children: 2,
      infants: 3,

    },
  ];
}
