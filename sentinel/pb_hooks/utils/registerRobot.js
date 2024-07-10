module.exports = () => {
  const allRobots = arrayOf(new DynamicModel({ id: '' }))
  $app.dao().db().select('id').from('robots').all(allRobots)
  const newRobot = new Record(
    $app.dao().findCollectionByNameOrId('robots'), 
    { alias: 'Robot ' + allRobots.length }
  )
  $app.dao().saveRecord(newRobot)
  return newRobot.id
}