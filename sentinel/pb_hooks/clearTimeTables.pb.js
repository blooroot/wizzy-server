/// <reference path="../pb_data/types.d.ts" />

$app.rootCmd.addCommand(new Command({
  use: "reset_time_tables",
  run: () => {
    const years = $app.dao().findCollectionByNameOrId('years')
    $app.dao().deleteCollection(years)
    const months = $app.dao().findCollectionByNameOrId('months')
    $app.dao().deleteCollection(months)
    const days = $app.dao().findCollectionByNameOrId('days')
    $app.dao().deleteCollection(days)

    ['years', 'months', 'days'].forEach((e) => {
      const collection = new Collection({
        name: e,
        type: 'base',
        listRule: null,
        viewRule: null,
        createRule: null,
        updateRule: null,
        deleteRule: null,
        schema: [
          { name: 'date_time', type: 'datetime' },
          { name: 'total_logs', type: 'number' },
          { name: 'min_temperature', type: 'number' },
          { name: 'max_temperature', type: 'number' },
          { name: 'mean_temperature', type: 'number' },
          { name: 'min_humidity', type: 'number' },
          { name: 'max_humidity', type: 'number' },
          { name: 'mean_humidity', type: 'number' },
          { name: 'min_heat_index', type: 'number' },
          { name: 'max_heat_index', type: 'number' },
          { name: 'mean_heat_index', type: 'number' },
          { name: 'min_vpd', type: 'number' },
          { name: 'max_vpd', type: 'number' },
          { name: 'mean_vpd', type: 'number' }
        ]
      })
      $app.dao().saveCollection(collection)
    })
  },
}))