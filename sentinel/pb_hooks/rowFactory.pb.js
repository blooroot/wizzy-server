/// <reference path="../pb_data/types.d.ts" />

cronAdd('0 0 1 1 *', () => {
  const now = new Date()
  const newYearRecord = Record('years', {
    id: `${now.getFullYear()}`,
    total_logs: 0,
    mean_temperature: 0,
    mean_humidity: 0
  })
  $app.dao().saveRecord(newYearRecord)
})

cronAdd('0 0 1 * *', () => {
  const now = new Date()
  const newMonthRecord = Record('months', {
    id: `${now.getMonth()}-${now.getFullYear()}`,
    year: `${now.getFullYear()}`,
    month: now.getMonth(),
    total_logs: 0,
    mean_temperature: 0,
    mean_humidity: 0
  })
  $app.dao().saveRecord(newMonthRecord)
})

cronAdd('0 0 * * *', () => {
  const now = new Date()
  const newDayRecord = Record('days', {
    id: `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`,
    month: `${now.getMonth()}-${now.getFullYear()}`,
    day: now.getDate(),
    total_logs: 0,
    mean_temperature: 0,
    mean_humidity: 0
  })
  $app.dao().saveRecord(newDayRecord)
})