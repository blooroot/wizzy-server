/// <reference path="../pb_data/types.d.ts" />

$app.rootCmd.addCommand(new Command({
  use: "create_time_tables",
  run: () => {
    const levels = ['years', 'months', 'days']

    levels.forEach((e) => {
      const collection = new Collection({
        name: e,
        type: 'base',
        listRule: "",
        viewRule: "",
        createRule: "",
        updateRule: "",
        deleteRule: "",
        schema: [],
        indexes: [],
        options: {},
      })

      $app.dao().saveCollection(collection)

      collection.schema.addField(new SchemaField({
        name: 'date_time',
        type: 'datetime',
      }))

      collection.schema.addField(new SchemaField({
        name: 'total_logs',
        type: 'number',
      }))

      const variables = ['temperature', 'humidity', 'heat_index', 'vpd']

      variables.forEach(v => {
        collection.schema.addField(new SchemaField({
          name: `min_${v}`,
          type: 'number',
        }))
        collection.schema.addField(new SchemaField({
          name: `max_${v}`,
          type: 'number',
        }))
        collection.schema.addField(new SchemaField({
          name: `mean_${v}`,
          type: 'number',
        }))
      })

      $app.dao().saveCollection(collection)
    })
  },
}))