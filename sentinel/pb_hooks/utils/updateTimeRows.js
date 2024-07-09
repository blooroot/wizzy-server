/// <reference path="../../pb_data/types.d.ts" />

module.exports = (logRecord) => {
  const updateTimeRow = require(`${__hooks}/utils/updateTimeRow`)
  
  const logStats = {
    temperature: logRecord.get('temperature'),
    humidity: logRecord.get('humidity'),
    heat_index: logRecord.get('heat_index'),
    vpd: logRecord.get('vpd'),
  }
  
  const robot = logRecord.get('robot')
  const logDateTime = logRecord.get('date_time')
  const time = logDateTime.time()
  const year = time.year()
  const month = parseInt(JSON.stringify(time.month())) - 1
  const day = time.day()

  updateTimeRow(
    'years', 
    `${year}:${robot}`,
    robot,
    new Date(year, 0, 1), 
    logStats,
    logDateTime,
  )

  updateTimeRow(
    'months', 
    `${month}-${year}:${robot}`, 
    robot,
    new Date(year, month, 1), 
    logStats,
    logDateTime,
  )

  updateTimeRow(
    'days', 
    `${day}-${month}-${year}:${robot}`, 
    robot,
    new Date(year, month, day), 
    logStats,
    logDateTime,
  )
}