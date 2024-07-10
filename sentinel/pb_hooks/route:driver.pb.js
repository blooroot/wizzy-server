/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  let robotId = c.queryParam('robot')
  if (!robotId) {
    const robotsCollection = $app.dao().findCollectionByNameOrId('robots')
    const robots = $app.dao().findRecordsByFilter('robots', '')
    // const newRobot = new Record(robotsCollection, {
    //   alias: 'Robot ' + robots.length,
    // })
    // $app.dao().saveRecord(newRobot)
    // robotId = newRobot.id
    $app.logger().debug('data', 
      'robots', robots,
    )
  }
  // const { x, y, dx, dy }
})