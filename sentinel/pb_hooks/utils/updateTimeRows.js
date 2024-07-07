const updateTimeRows = (record) => {
  const temperature = record.get('temperature')
  const humidity = record.get('humidity')
  const datetime = record.get('datetime').time()

  $app.logger().debug('record', 
    "temperature", temperature,
    "humidity", humidity,
    "year", datetime.year(),
    "month", datetime.month(),
    "day", datetime.day(),
  )

  // const year = datetime.getFullYear()
  // const month = datetime.getMonth()
  // const day = datetime.getDate()

  // const yearRecord = $app.dao().findRecordById('years', `${year}`)
  // if (!yearRecord) {
  //   yearRecord = new Record(
  //     $app.dao().findCollectionByNameOrId('years'),
  //     {
  //       id: `${year}`,
  //       total_logs: 0,
  //       mean_temperature: 0,
  //       mean_humidity: 0
  //     }
  //   )
  //   $app.dao().saveRecord(yearRecord)
  // }

  // const yearNewTotalLogs = yearRecord.get('total_logs') + 1
  // yearRecord.set('total_logs',  
  //   yearNewTotalLogs
  // )
  // yearRecord.set('mean_temperature',
  //   (yearRecord.get('mean_temperature') + temperature) / yearNewTotalLogs
  // )
  // yearRecord.set('mean_humidity',
  //   (yearRecord.get('mean_humidity') + humidity) / yearNewTotalLogs
  // )

  // const monthRecord = $app.dao().findRecordById('months', `${month}-${year}`)
  // if (!monthRecord) {
  //   monthRecord = new Record(
  //     $app.dao().findCollectionByNameOrId('months'),
  //     {
  //       id: `${month}-${year}`,
  //       total_logs: 0,
  //       mean_temperature: 0,
  //       mean_humidity: 0
  //     }
  //   )
  //   $app.dao().saveRecord(monthRecord)
  // }

  // const monthNewTotalLogs = monthRecord.get('total_logs') + 1
  // monthRecord.set('total_logs',
  //   monthNewTotalLogs
  // )
  // monthRecord.set('mean_temperature',
  //   (monthRecord.get('mean_temperature') + temperature) / monthNewTotalLogs
  // )
  // monthRecord.set('mean_humidity',
  //   (monthRecord.get('mean_humidity') + humidity) / monthNewTotalLogs
  // )

  // const dayRecord = $app.dao().findFirstRecordById('days', `${day}-${month}-${year}`)
  // if (!dayRecord) {
  //   dayRecord = new Record(
  //     $app.dao().findCollectionByNameOrId('days'),
  //     {
  //       id: `${day}-${month}-${year}`,
  //       total_logs: 0,
  //       mean_temperature: 0,
  //       mean_humidity: 0
  //     }
  //   )
  //   $app.dao().saveRecord(dayRecord)
  // }

  // const dayNewTotalLogs = dayRecord.get('total_logs') + 1
  // dayRecord.set('total_logs',
  //   dayNewTotalLogs
  // )
  // dayRecord.set('mean_temperature',
  //   (dayRecord.get('mean_temperature') + temperature) / dayNewTotalLogs
  // )
  // dayRecord.set('mean_humidity',
  //   (dayRecord.get('mean_humidity') + humidity) / dayNewTotalLogs
  // )
}

module.exports = updateTimeRows