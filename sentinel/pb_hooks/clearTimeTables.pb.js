/// <reference path="../pb_data/types.d.ts" />

$app.rootCmd.addCommand(new Command({
  use: "reset_time_tables",
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

    // const levels = ['years', 'months', 'days']

    // levels.forEach((e) => {
    //   const collection = new Collection({
    //     name: e,
    //     type: 'base',
    //     listRule: "",
    //     viewRule: "",
    //     createRule: "",
    //     updateRule: "",
    //     deleteRule: "",
    //     indexes: [],
    //     options: {},
    //   })

    //   collection.schema.addField(new SchemaField({
    //     name: 'date_time',
    //     type: 'datetime',
    //   }))

    //   collection.schema.addField(new SchemaField({
    //     name: 'total_logs',
    //     type: 'number',
    //   }))

    //   const variables = ['temperature', 'humidity', 'heat_index', 'vpd']

    //   variables.forEach(v => {
    //     collection.schema.addField(new SchemaField({
    //       name: `min_${v}`,
    //       type: 'number',
    //     }))
    //     collection.schema.addField(new SchemaField({
    //       name: `max_${v}`,
    //       type: 'number',
    //     }))
    //     collection.schema.addField(new SchemaField({
    //       name: `mean_${v}`,
    //       type: 'number',
    //     }))
    //   })

    //   $app.dao().saveCollection(collection)
    // })
  },
}))