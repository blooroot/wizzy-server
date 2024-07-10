/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  const robotId = c.queryParam('robot')
  $app.logger().debug('robot', 'id', robotId)
  // const { x, y, dx, dy }
})