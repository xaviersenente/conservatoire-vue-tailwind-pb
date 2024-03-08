/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f5b3lghe50wzh94")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e73ksjmd",
    "name": "excerpt",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f5b3lghe50wzh94")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e73ksjmd",
    "name": "excerpt",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
