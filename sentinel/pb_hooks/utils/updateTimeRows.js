/// <reference path="../../pb_data/types.d.ts" />

module.exports = (logRecord) => {
  const updateTimeRow = require(`${__hooks}/utils/updateTimeRow`)
  
  const log = {
    temperature: logRecord.get('temperature'),
    humidity: logRecord.get('humidity'),
    heat_index: logRecord.get('heat_index'),
    vpd: logRecord.get('vpd'),
  }
  
  const robot = logRecord.get('robot')
  const dateTime = logRecord.get('date_time')
  const time = dateTime.time()
  const year = time.year()
  const month = time.month()
  const day = time.day()

  $app.logger().debug('month',
    'month', month,
    'typeof month', typeof month,
    'parseInt(month)', parseInt(month),
    'month.toString()', month.toString(),
    'JSON.stringify(month)', JSON.stringify(month),
  )

  updateTimeRow(
    'years', 
    `${year}:${robot}`,
    robot,
    new Date(year, 0, 1), 
    log
  )

  updateTimeRow(
    'months', 
    `${month}-${year}:${robot}`, 
    robot,
    new Date(year, month, 1), 
    log
  )

  updateTimeRow(
    'days', 
    `${day}-${month}-${year}:${robot}`, 
    robot,
    new Date(year, month, day), 
    log
  )
}