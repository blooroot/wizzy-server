module.exports = (route) => {
  const { x, y, dx } = JSON.parse(route.get('state'))

  const px = route.get('px')
  const py = route.get('py')
  const stride = route.get('stride')

  if (dx === 1 && x === px) {
    if (y === py) {
      route.set('state', JSON.stringify({ x: 0, y: 0, dx: 1 }))
      route.set('active', false)
      return [
        { type: 'rotate', value: 90 },
        { type: 'move', value: stride * py },
        { type: 'rotate', value: 90 },
        { type: 'move', value: stride * px },
      ]
    }

    route.set('state', JSON.stringify({ x, y: y + 1, dx: -1 }))
    return [
      { type: 'rotate', value: -90 },
      { type: 'move', value: stride },
      { type: 'rotate', value: -90 },
    ]
  }

  if (dx === -1 && x === 0) {
    if (y === py) {
      route.set('state', JSON.stringify({ x: 0, y: 0, dx: 1 }))
      route.set('active', false)
      return [
        { type: 'rotate', value: -90 },
        { type: 'move', value: stride * py }
      ]
    }

    route.set('state', JSON.stringify({ x, y: y + 1, dx: 1 }))
    return [
      { type: 'rotate', value: 90 },
      { type: 'move', value: stride },
      { type: 'rotate', value: 90 },
    ]
  }
  
  route.set('state', JSON.stringify({ x: x + dx, y, dx }))
  return [{ type: 'move', value: stride }]
}