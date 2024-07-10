/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  let robotId = c.queryParam('robot')
  if (!robotId) {
    const robotsCollection = $app.dao().findCollectionByNameOrId('robots')
    const allRobots = $app.dao().db().select('*').from(robotsCollection)
    // const newRobot = new Record(robotsCollection, {
    //   alias: 'Robot ' + allRobots.length,
    // })
    // $app.dao().saveRecord(newRobot)
    // robotId = newRobot.id
    $app.logger().debug('data', 
      'allRobots', allRobots,
    )
  }
  // const { x, y, dx, dy }
})