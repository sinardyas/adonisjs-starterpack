'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PresenceSchema extends Schema {
  up () {
    this.create('presences', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('type').unsigned().references('id').inTable('presence_types')
      table.timestamps()
    })
  }

  down () {
    this.drop('presences')
  }
}

module.exports = PresenceSchema
