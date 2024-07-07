/// <reference path="../pb_data/types.d.ts" />

onRecordAfterCreateRequest(({ record }) => {
  const updateTimeRows = require(`${__hooks}/utils/updateTimeRows`)
  updateTimeRows(record)
}, 'time_logs')