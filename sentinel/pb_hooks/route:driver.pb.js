/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  const robotId = c.queryParam('robot')
  const registerRobot = require(`${__hooks}/utils/registerRobot`)
  
  if (!robotId) {
    registerRobot()
  }

  const robot = $app.dao().findRecordById('robots', robotId)
  
  const route = $app.dao().findRecordsByFilter(
    'routes', `robot = "${robotId}"`
  )

  // const { x, y, dx, dy }
})