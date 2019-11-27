'use strict'

const User = use('app/Models/User')

class UserController {
  async store({request}){
    const data = request.only([
      'email',
      'username',
      'password'])

    const user = await User.create(
      data
    )

    return User;
  }
}

module.exports = UserController
