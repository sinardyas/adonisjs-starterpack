'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Presence extends Model {
  user () {
    return this.belongsToMany('App/Models/User', 'id', 'user_id').pivotTable('presences')
  }

  presenceType () {
    return this.belongsToMany('App/Models/PresenceType', 'id', 'type').pivotTable('presences')
  }
}

module.exports = Presence
