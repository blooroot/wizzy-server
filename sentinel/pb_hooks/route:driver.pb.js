/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  const robotId = c.queryParam('robot')
  const registerRobot = require(`${__hooks}/utils/registerRobot`)
  
  if (!robotId) {
    const robot_id = registerRobot()
    return c.json(200, { robot_id })
  }

  $app.dao().findRecordById('robots', robotId)

  const route = $app.dao().findRecordsByFilter(
    'routes', `robot = "${robotId}"`
  )

  $app.logger().debug('debug',
    'route', route
  )
  
  // const { x, y, dx, dy }
})