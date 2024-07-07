module.exports = (record, logStats) => {
  const statsList = Object.keys(logStats)
  const newTotalLogs = record.get('total_logs') + 1
  record.set('total_logs', newTotalLogs)
  statsList.forEach(stat => {
    record.set(`min_${stat}`, 
      Math.min(record.get(`min_${stat}`), logStats[stat])
    )
    record.set(`max_${stat}`, 
      Math.max(record.get(`max_${stat}`), logStats[stat])
    )
    record.set(`mean_${stat}`,
      (record.get(`mean_${stat}`) * (newTotalLogs - 1) + logStats[stat]) / newTotalLogs
    )
  })
  $app.dao().saveRecord(record)
}