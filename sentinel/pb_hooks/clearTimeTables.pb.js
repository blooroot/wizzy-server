/// <reference path="../pb_data/types.d.ts" />

$app.rootCmd.addCommand(new Command({
  use: "delete_time_tables",
  run: () => {
    try {
      const years = $app.dao().findCollectionByNameOrId('years')
      $app.dao().deleteCollection(years)
    }
    catch (e) {
      if (e.name !== 'GoError') {
        throw e
      }
    }
    try {
      const months = $app.dao().findCollectionByNameOrId('months')
      $app.dao().deleteCollection(months)
    }
    catch (e) {
      if (e.name !== 'GoError') {
        throw e
      }
    }
    try {
      const days = $app.dao().findCollectionByNameOrId('days')
      $app.dao().deleteCollection(days)
    }
    catch (e) {
      if (e.name !== 'GoError') {
        throw e
      }
    }
  },
}))