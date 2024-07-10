module.exports = (route) => {
  const { x, y, dx, dy } = JSON.parse(route.get('state'))
  
  return ({ x, y, dx, dy })
}