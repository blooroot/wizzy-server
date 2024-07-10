/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  const robotId = c.queryParam('robot')
  const registerRobot = require(`${__hooks}/utils/registerRobot`)
  const computeNewInstructions = require(`${__hooks}/utils/computeNewInstructions`)
  
  if (!robotId) {
    const robot_id = registerRobot()
    return c.json(200, { robot_id })
  }

  $app.dao().findRecordById('robots', robotId)

  const route = $app.dao().findFirstRecordByFilter(
    'routes', `robot = "${robotId}"`
  )

  if (!route || !route.get('active') ) {
    return c.json(200, {
      instructions: [
        { type: 'sleep', value: 1000 }
      ] 
    })
  }

  const instructions = computeNewInstructions(route)
  return c.json(200, { instructions })
})