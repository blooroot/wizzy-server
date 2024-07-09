module.exports = (timeCollectionId, id, robot, timeRowDateTime, logStats, logDateTime) => {
  const initStats = require(`${__hooks}/utils/initStats`)
  const updateStatsOf = require(`${__hooks}/utils/updateStatsOf`)
  let timeRowRecord
  try {
    timeRowRecord = $app.dao().findRecordById(timeCollectionId, id)
  }
  catch (e) {
    if (e.name !== 'GoError') {
      throw e
    }
    timeRowRecord = new Record(
      $app.dao().findCollectionByNameOrId(timeCollectionId),
      {
        id,
        robot,
        date_time: timeRowDateTime,
        ...initStats
      }
    )
    $app.dao().saveRecord(timeRowRecord)
  }
  updateStatsOf(timeRowRecord, logStats, logDateTime)
}