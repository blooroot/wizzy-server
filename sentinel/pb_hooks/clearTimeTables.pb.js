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

    ['years', 'months', 'days'].forEach((e) => {
      const collection = new Collection({
        name: e,
        type: 'base',
        listRule: "",
        viewRule: "",
        createRule: "",
        updateRule: "",
        deleteRule: "",
        // schema: [
        //   { 
        //     name: 'date_time',
        //     type: 'datetime',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'total_logs',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'min_temperature',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'max_temperature',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'mean_temperature',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'min_humidity',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'max_humidity',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'mean_humidity',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'min_heat_index',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'max_heat_index',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'mean_heat_index',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'min_vpd',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'max_vpd',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }, 
        //   { 
        //     name: 'mean_vpd',
        //     type: 'number',
        //     required: true,
        //     options: {}
        //   }
        // ],
        indexes: [],
        options: {},
      })

      collection.schema.addField(new SchemaField({
        name: 'date_time',
        type: 'datetime',
        required: true,
        options: {}
      }))

      collection.schema.addField(new SchemaField({
        name: 'total_logs',
        type: 'number',
        required: true,
        options: {}
      }))

      [ 
        'temperature',
        'humidity',
        'heat_index',
        'vpd'
      ].forEach(v => {
        collection.schema.addField(new SchemaField({
          name: `min_${v}`,
          type: 'number',
          required: true,
          options: {}
        }))
        collection.schema.addField(new SchemaField({
          name: `max_${v}`,
          type: 'number',
          required: true,
          options: {}
        }))
        collection.schema.addField(new SchemaField({
          name: `mean_${v}`,
          type: 'number',
          required: true,
          options: {}
        }))
      })

      $app.dao().saveCollection(collection)
    })
  },
}))