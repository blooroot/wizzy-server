$app.rootCmd.addCommand(new Command({
  use: "pushone",
  run: (cmd, args) => {
    const logs = $app.dao().findCollectionByNameOrId('time_logs')
    const newLog = new Record(logs, {
      temperature: parseFloat(args[0]),
      humidity: parseFloat(args[1]),
      datetime: new Date(),
      robot: 'hwyhz71t37i4n3k',
    })
    $app.dao().saveRecord(newLog)
  },
}))