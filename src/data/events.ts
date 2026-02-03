export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  type: 'online' | 'in-person';
  description: string;
  registrationUrl?: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Zoom Into Stillness – Gathering',
    date: '2026-02-04',
    time: '6:00 PM',
    duration: '1 hour 15 min',
    location: 'Online via Zoom',
    type: 'online',
    description: 'Join me for this free Zoom gathering. An invitation to slow down, settle inward, and rest in a shared field of quiet presence.',
    registrationUrl: '#',
  },
  {
    id: '2',
    title: 'Weekly Meditation Circle',
    date: '2026-02-08',
    time: '7:00 PM',
    duration: '1 hour',
    location: 'Seattle, WA',
    type: 'in-person',
    description: 'A weekly gathering for meditation and shared presence. Open to all, regardless of experience.',
    registrationUrl: '#',
  },
  {
    id: '3',
    title: 'Going Beyond Personality – 3-Day Retreat',
    date: '2026-03-06',
    time: '10:00 AM',
    duration: '3 days',
    location: 'Shropshire, UK',
    type: 'in-person',
    description: 'A 3-day intimate immersion spiritual retreat exploring life beyond habitual identity. Using the Enneagram as a sacred mirror.',
    registrationUrl: 'https://www.eventbrite.com/e/going-beyond-personality-3-day-immersion-spiritual-retreat-tickets-1981442745591',
  },
];

export const getUpcomingEvents = (): Event[] => {
  const today = new Date().toISOString().split('T')[0];
  return events.filter((event) => event.date >= today);
};
