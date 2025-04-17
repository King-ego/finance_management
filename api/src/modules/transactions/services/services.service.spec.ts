import { Test, TestingModule } from "@nestjs/testing";
import { CreateTransactionsService } from "./create.transactions.service";

describe("CreateTransactionsService", () => {
    let service: CreateTransactionsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CreateTransactionsService],
        }).compile();

        service = module.get<CreateTransactionsService>(
            CreateTransactionsService,
        );
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });
});
