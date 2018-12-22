'use strict'

const User = use('App/Models/User')

class UserController {
    async getUser ({ view }) {
        const users = await User.all()

        return view.render('content.user', { users: users.toJSON() })
    }

    async createUser ({ view }) {

    }
}

module.exports = UserController
