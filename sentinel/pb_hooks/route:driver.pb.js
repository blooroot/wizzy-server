/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  const robotId = c.queryParam('robot')
  if (!robotId) {
    const allRobots = arrayOf(new DynamicModel({ id: '' }))
    $app.dao().db().select('id').from('robots').all(allRobots)
    const newRobot = new Record(
      $app.dao().findCollectionByNameOrId('robots'), 
      { alias: 'Robot ' + allRobots.length }
    )
    $app.dao().saveRecord(newRobot)
    return c.json(200, { robotId: newRobot.id })
  }
  // const { x, y, dx, dy }
})