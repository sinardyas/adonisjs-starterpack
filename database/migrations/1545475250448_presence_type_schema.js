'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PresenceTypeSchema extends Schema {
  up () {
    this.create('presence_types', (table) => {
      table.increments()
      table.string('type', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('presence_types')
  }
}

module.exports = PresenceTypeSchema
