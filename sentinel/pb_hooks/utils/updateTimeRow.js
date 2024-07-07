module.exports = (collectionId, id, robot, date_time, log) => {
  const initStats = require(`${__hooks}/utils/initStats`)
  const updateStatsOf = require(`${__hooks}/utils/updateStatsOf`)
  let record
  try {
    record = $app.dao().findRecordById(collectionId, id)
  }
  catch (e) {
    if (e.name !== 'GoError') {
      throw e
    }
    record = new Record(
      $app.dao().findCollectionByNameOrId(collectionId),
      {
        id,
        robot,
        date_time,
        ...initStats
      }
    )
    $app.dao().saveRecord(record)
  }
  updateStatsOf(record, log)
}