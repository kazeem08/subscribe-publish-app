import { Test, TestingModule } from '@nestjs/testing';
import { PublishController } from './publish.controller';
import { PublishService } from './publish.service';

describe('PublishController', () => {
  let controller: PublishController;
  let service: PublishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublishController],
      providers: [
        {
          provide: PublishService,
          useValue: {
            publish: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<PublishController>(PublishController);
    service = module.get<PublishService>(PublishService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Subscribe', () => {
    it('should return an object containing url and topic', async () => {
      const result = {
        topic: 'topic1',
        data: {
          message: 'Hello world',
        },
      };

      const response = {
        json: (body?: any) => {
          expect(body).toStrictEqual(result);
        },
        status: (code: number) => response,
      };

      jest
        .spyOn(controller, 'publish')
        .mockImplementation(async () => result as any);
      jest.enableAutomock();
      expect(
        await controller.publish(response, 'topic1', {
          message: 'Hello world',
        }),
      ).toEqual(result);
    });
  });
});
