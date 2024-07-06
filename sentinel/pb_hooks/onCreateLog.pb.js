/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateRequest(({ record }) => {
  const temperature = record.get('temperature')
  const humidity = record.get('humidity')
  const datetime = record.get('datetime')

  const year = datetime.getFullYear()
  const month = datetime.getMonth()
  const day = datetime.getDate()

  const yearRecord = $app.dao().findRecordById('years', `${year}`)
  const yearNewTotalLogs = yearRecord.get('total_logs') + 1
  yearRecord.set('total_logs', 
    yearNewTotalLogs
  )
  yearRecord.set('mean_temperature', 
    (yearRecord.get('mean_temperature') + temperature) / yearNewTotalLogs
  )
  yearRecord.set('mean_humidity', 
    (yearRecord.get('mean_humidity') + humidity) / yearNewTotalLogs
  )

  const monthRecord = $app.dao().findFirstRecordByFilter('months', 
    `year = "${year}" && month = "${month}"`
  )
  const monthNewTotalLogs = monthRecord.get('total_logs') + 1
  monthRecord.set('total_logs', 
    monthNewTotalLogs
  )
  monthRecord.set('mean_temperature', 
    (monthRecord.get('mean_temperature') + temperature) / monthNewTotalLogs
  )
  monthRecord.set('mean_humidity', 
    (monthRecord.get('mean_humidity') + humidity) / monthNewTotalLogs
  )

  const dayRecord = $app.dao().findFirstRecordByFilter('days', 
    `month = "${monthRecord.get('id')}" && day = "${day}"`
  )
  const dayNewTotalLogs = dayRecord.get('total_logs') + 1
  dayRecord.set('total_logs', 
    dayNewTotalLogs
  )
  dayRecord.set('mean_temperature', 
    (dayRecord.get('mean_temperature') + temperature) / dayNewTotalLogs
  )
  dayRecord.set('mean_humidity', 
    (dayRecord.get('mean_humidity') + humidity) / dayNewTotalLogs
  )
}, 'time_logs')