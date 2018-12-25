'use strict'

/*
|--------------------------------------------------------------------------
| PresenceTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')
const Database = use('Database')


class PresenceTypeSeeder {
  async run () {
    await Database.table('presence_types')
    await Factory.model('App/Models/PresenceType').createMany(4, [
      'Masuk 1', 'Istirahat', 'Masuk 2', 'Keluar'
    ])
  }
}

module.exports = PresenceTypeSeeder
