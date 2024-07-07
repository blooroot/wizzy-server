module.exports = (logRecord) => {
  const updateTimeRow = require(`${__hooks}/utils/updateTimeRow`)
  
  const log = {
    temperature: logRecord.get('temperature'),
    humidity: logRecord.get('humidity'),
    heat_index: logRecord.get('heat_index'),
    vpd: logRecord.get('vpd'),
  }
  
  const dateTime = logRecord.get('date_time').time()
  
  const year = dateTime.year()
  const month = dateTime.month()
  const day = dateTime.day()

  updateTimeRow(
    'years', 
    `${year}`, 
    new Date(year, 0, 1), 
    log
  )

  updateTimeRow(
    'months', 
    `${month}-${year}`, 
    new Date(year, month, 1), 
    log
  )

  updateTimeRow(
    'days', 
    `${day}-${month}-${year}`, 
    new Date(year, month, day), 
    log
  )
}