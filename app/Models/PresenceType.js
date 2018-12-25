'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PresenceType extends Model {
  presence () {
    return this.hasMany('App/Models/Presence', 'id', 'type');
  }
}

module.exports = PresenceType
