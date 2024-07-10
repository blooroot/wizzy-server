/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/driver", (c) => {
  const robotId = c.queryParam('robot')
  if (!robotId) {
    console.log('robotId is required')
  }
  // const { x, y, dx, dy }
})