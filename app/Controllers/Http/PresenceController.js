'use strict'

const Presence = use('App/Models/Presence')
const Database = use('Database')

class PresenceController {
  async getPresence ({ request, view }) {
    const { page = 1, limit = 10 } = request.get();
    const offset = limit * (page - 1);

    const presences = await Presence.query().paginate(page, limit);    
    const pre = await Presence.query().with('user').with('presenceType').limit(limit).offset(offset).fetch()    
    const parsed = pre.toJSON();    
        
    return view.render('content.presence', { presences: parsed, page: presences.pages });
  }

  async createPresence ({ request, response }) {
    const { user_id } = request.body;
    const presence = new Presence();
    let userPresence = null;
    let query = {};

    try {
      userPresence = await Presence.findBy({ user_id });
    } catch (e) {
      return response.status(500).json({
        status: 500,
        success: false
      });
    }

    presence.user_id = user_id;

    if (!userPresence) {
      presence.type = 1;

      try {
        await presence.save();
      } catch (e) {
        return response.status(500).json({
          status: 500,
          success: false
        });
      }
    }

    if (userPresence && (userPresence.type === 1)) {
      query.type = 2;
    }

    if (userPresence && (userPresence.type === 2)) {
      query.type = 3;
    }

    if (userPresence && (userPresence.type === 3)) {
      query.type = 4;
    }

    try {
      await Presence.query().where('user_id', user_id).update(query);
    } catch (e) {
      return response.status(500).json({
        status: 500,
        success: false
      });
    }

    return response.status(200).json({
        status: 200,
        success: true
    });
  }
}

module.exports = PresenceController
