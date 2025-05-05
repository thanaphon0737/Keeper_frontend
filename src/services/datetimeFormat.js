
const options = {
  weekday:  'short',   // "Mon"
  year:     'numeric', // "2025"
  month:    'long',    // "May"
  day:      'numeric', // "5"
  hour:     '2-digit', // "09"
  minute:   '2-digit', // "20"
  second:   '2-digit', // "26"
  timeZone: 'UTC'      // because the original string is UTC
};
export const datetimeFormat = (iso) =>{
    const date = new Date(iso);
    const fmt = new Intl.DateTimeFormat('en-US', options)
    return fmt.format(date)
}