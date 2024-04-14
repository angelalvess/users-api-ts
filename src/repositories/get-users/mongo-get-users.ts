import { IGetUsersRepository } from '../../controllers/get-users/protocols';
import { User } from '../../models/user';

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: 'Angie',
        lastName: 'Alves',
        email: 'angie@gmail.com',
        password: '12345',
      },
    ];
  }
}
