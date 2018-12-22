'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {
    async getUser ({ request, view }) {
        const { page } = request.get()
        const users = await Database.from('users').paginate(page, 10)        

        return view.render('content.user', { users: users })
    }

    async createUser ({ request, response }) {
        const { username, email, password } = request.body;
        const user = new User()

        user.username = username
        user.email = email
        user.password = password
        await user.save()

        return response.status(200).json({
            status: 200,
            success: true
        })
    }
}

module.exports = UserController
