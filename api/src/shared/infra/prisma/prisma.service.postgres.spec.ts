import { Test, TestingModule } from '@nestjs/testing';
import { PrismaServicePostgres } from './prisma.service.postgres';

describe('PrismaService', () => {
  let service: PrismaServicePostgres;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaServicePostgres],
    }).compile();
    // @ts-ignore
    service = module.get<PrismaServicePostgres>(PrismaServicePostgres);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
