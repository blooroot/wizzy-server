module.exports = (collectionId, rowId, rowDate, log) => {
  const initStats = require(`${__hooks}/utils/initStats`)
  let record
  try {
    record = $app.dao().findRecordById(collectionId, rowId)
  }
  catch (e) {
    if (e.name !== 'GoError') {
      throw e
    }
    record = new Record(
      $app.dao().findCollectionByNameOrId(collectionId),
      {
        id: rowId,
        date_time: rowDate,
        ...initStats
      }
    )
    $app.dao().saveRecord(record)
  }
  updateStatsOf(record, log)
}