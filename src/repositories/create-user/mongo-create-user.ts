import {
  ICreateUserRepository,
  CreateUserParams,
} from '../../controllers/create-user/protocols';
import { MongoClient } from '../../database/mongo';
import { User } from '../../models/user';

export class MongoCreateUser implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    // implementation

    const { insertedId } = await MongoClient.db
      .collection('users')
      .insertOne(params);
    const user = await MongoClient.db
      .collection<Omit<User, 'id'>>('users')
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error('User not found');
    }

    const { _id, ...rest } = user;

    return {
      id: _id.toHexString(),
      ...rest,
    };
  }
}
