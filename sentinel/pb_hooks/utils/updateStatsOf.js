module.exports = (timeRowRecord, logStats, logDateTime) => {
  const newTotalLogs = timeRowRecord.get('total_logs') + 1
  timeRowRecord.set('total_logs', newTotalLogs)
  Object.keys(logStats).forEach(stat => {
    if (logStats[stat] < timeRowRecord.get(`min_${stat}`)) {
      timeRowRecord.set(`min_${stat}`, logStats[stat])
      timeRowRecord.set(`min_${stat}_date_time`, logDateTime)
    }
    if (logStats[stat] > timeRowRecord.get(`max_${stat}`)) {
      timeRowRecord.set(`max_${stat}`, logStats[stat])
      timeRowRecord.set(`max_${stat}_date_time`, logDateTime)
    }
    timeRowRecord.set(`mean_${stat}`,
      (timeRowRecord.get(`mean_${stat}`) * (newTotalLogs - 1) + logStats[stat]) / newTotalLogs
    )
  })
  $app.dao().saveRecord(timeRowRecord)
}