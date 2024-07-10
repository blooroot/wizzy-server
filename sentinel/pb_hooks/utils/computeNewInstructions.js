module.exports = (route) => {
  const state = route.get('state')
  const { x, y, dx, dy } = JSON.parse(state)
  return ({ x, y, dx, dy })
}