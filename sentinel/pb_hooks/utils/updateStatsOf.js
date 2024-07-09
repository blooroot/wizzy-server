module.exports = (record, logStats) => {
  const statsList = Object.keys(logStats)
  const newTotalLogs = record.get('total_logs') + 1
  record.set('total_logs', newTotalLogs)
  statsList.forEach(stat => {
    if (logStats[stat] < record.get(`min_${stat}`)) {
      record.set(`min_${stat}`, logStats[stat])
      record.set(`min_${stat}_date_time`, record.get('date_time'))
    }
    if (logStats[stat] > record.get(`max_${stat}`)) {
      record.set(`max_${stat}`, logStats[stat])
      record.set(`max_${stat}_date_time`, record.get('date_time'))
    }
    record.set(`mean_${stat}`,
      (record.get(`mean_${stat}`) * (newTotalLogs - 1) + logStats[stat]) / newTotalLogs
    )
  })
  $app.dao().saveRecord(record)
}