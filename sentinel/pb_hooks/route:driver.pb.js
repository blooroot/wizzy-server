/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  let robotId = c.queryParam('robot')
  if (!robotId) {
    const robotsCollection = $app.dao().findCollectionByNameOrId('robots')
    const allRobots = $app.dao().db().select('*').from('robots')
    // const newRobot = new Record(robotsCollection, {
    //   alias: 'Robot ' + allRobots.length,
    // })
    // $app.dao().saveRecord(newRobot)
    // robotId = newRobot.id
    return c.json(200, { robots: allRobots })
  }
  // const { x, y, dx, dy }
})