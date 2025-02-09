$app.rootCmd.addCommand(new Command({
  use: "test_data",
  run: () => {
    const updateTimeRows = require(`${__hooks}/utils/updateTimeRows`)
    const logs = $app.dao().findCollectionByNameOrId('time_logs')
    
    const curve = (t, smear, phase) => Math.pow(1 + 0.00001*smear, -1*((t - phase)**2))
    const rand = (min, max) => min + Math.random() * (max - min)
    
    const es = (T) => 0.61078 * Math.exp((17.269 * T) / (T + 237.3))
    const vpd = (T, HR) => es(T) * (1 - HR/100)
    const hi = (T, HR) => -42.379 + 2.04901523*T + 10.14333127*HR - 0.22475541*T*HR - 0.00683783*T*T - 0.05481717*HR*HR + 0.00122874*T*T*HR + 0.00085282*T*HR*HR - 0.00000199*T*T*HR*HR

    const stride = 15
    const strideTime = stride * 60 * 1000

    let startDate = new Date(2023, 9, 21, 0, 0, 0)
    const endDate = new Date(2024, 6, 9, 23, 59, 59)
    let start = startDate.getTime()
    const end = endDate.getTime()
    
    let t = startDate.getHours() * 60 + startDate.getMinutes()
    let phase = rand(780, 870)
    let smear = rand(2, 3)

    while (start < end) {
      const temperature = curve(t, smear, phase) * 10 + 15 + rand(0, 3)
      const humidity = curve(t, smear, phase) * (-40) + 80 + rand(0, 5)
      
      const newLog = new Record(logs, {
        temperature: temperature,
        humidity: humidity,
        heat_index: hi(temperature, humidity),
        vpd: vpd(temperature, humidity),
        date_time: new Date(start),
        robot: 'hwyhz71t37i4n3k',
      })

      $app.dao().saveRecord(newLog)
      updateTimeRows(newLog)
  
      start += strideTime
      t = (t + stride)
      if (t > 1440) {
        t = 0
        phase = rand(780, 870)
        smear = rand(2, 3)
      }
    }
  },
}))