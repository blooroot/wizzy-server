module.exports = (route) => {
  const { x, y, dx, dy } = route.get('state')

  return ({ x, y, dx, dy })
}