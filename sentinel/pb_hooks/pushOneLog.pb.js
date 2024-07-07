$app.rootCmd.addCommand(new Command({
  use: "test_log",
  run: () => {
    const logs = $app.dao().findCollectionByNameOrId('time_logs')
    const newLog = new Record(logs, {
      temperature: parseFloat(Math.random() * 10 + 10),
      humidity: parseFloat(Math.random() * 25 + 50),
      heat_index: parseFloat(Math.random() * 10 + 10),
      vpd: parseFloat(Math.random() * 10 + 10),
      date_time: new Date(),
      robot: 'hwyhz71t37i4n3k',
    })
    $app.dao().saveRecord(newLog)
    const updateTimeRows = require(`${__hooks}/utils/updateTimeRows`)
    // updateTimeRows(newLog)
  },
}))