import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();
    // @ts-ignore
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined create user', () => {
    const create =  controller.create({name: 'test', account_balance: 2000.12, email: "diego@gmail.com"})
    expect(create).toBe("Usuario criado com sucesso");
  });
});
