import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { CreateUsersService } from './services/create.users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const mockCreateUsersService = {
      execute: jest.fn().mockResolvedValue(undefined), // Simula a criação sem erro
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: CreateUsersService,
          useValue: mockCreateUsersService,
        },
      ],
    }).compile();
    //@ts-ignore
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined create user', async () => {
    const result = await controller.create({
      name: 'test',
      account_balance: 2000.12,
      email: 'diego@gmail.com',
    });

    expect(result).toBe('Usuario criado com sucesso');
  });
});
