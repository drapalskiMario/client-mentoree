export const customCalendar = {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],

  weekDays: [
    {
      name: 'Sunday', // used for accessibility
      short: 'D',
    },
    {
      name: 'Monday',
      short: 'S',
    },
    {
      name: 'Tuesday',
      short: 'T',
    },
    {
      name: 'Wednesday',
      short: 'Q',
    },
    {
      name: 'Thursday',
      short: 'Q',
    },
    {
      name: 'Friday',
      short: 'S',
    },
    {
      name: 'Saturday',
      short: 'S',
    },
  ],

  weekStartingIndex: 0,

  getToday(gregorainTodayObject) {
    return gregorainTodayObject
  },

  toNativeDate(date) {
    return new Date(date.year, date.month - 1, date.day)
  },

  getMonthLength(date) {
    return new Date(date.year, date.month, 0).getDate()
  },

  transformDigit(digit) {
    return digit
  },

  nextMonth: 'Next Month',
  previousMonth: 'Previous Month',
  openMonthSelector: 'Open Month Selector',
  openYearSelector: 'Open Year Selector',
  closeMonthSelector: 'Close Month Selector',
  closeYearSelector: 'Close Year Selector',
  defaultPlaceholder: 'Select...',
  from: 'from',
  to: 'to',
  digitSeparator: ',',
  yearLetterSkip: 0,
  isRtl: false,
}
