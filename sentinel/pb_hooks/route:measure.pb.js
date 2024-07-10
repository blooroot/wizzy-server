routerAdd('POST', '/measure', (c) => {
  const data = $apis.requestInfo(c).data

  const geo_logs = $app.dao().findCollectionByNameOrId('geo_logs')
  const geo_log = new Record(geo_logs, {
    robot: data.robot,
    lat: data.lat,
    lng: data.lng,
    row: data.row,
    col: data.col,
    resistance: data.resistance,
    date_time: data.date_time
  })
  $app.dao().saveRecord(geo_log)
  
  const time_logs = $app.dao().findCollectionByNameOrId('time_logs')
  const time_log = new Record(time_logs, {
    date_time: data.date_time,
    robot: data.robot,
    temperature: data.temperature,
    humidity: data.humidity,
    heat_index: data.heat_index,
    vpd: data.vpd,
  })
  $app.dao().saveRecord(time_log)

  return c.json(204)
})