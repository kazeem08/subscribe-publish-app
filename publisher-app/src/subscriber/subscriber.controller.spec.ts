import { Test, TestingModule } from '@nestjs/testing';
import { SubscriberController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';

describe('SubscriberController', () => {
  let controller: SubscriberController;
  let service: SubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriberController],
      providers: [
        {
          provide: SubscriberService,
          useValue: {
            create: jest.fn(),
            getActiveSubscriber: jest.fn(),
            findAll: jest.fn(),
            getTopic: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SubscriberController>(SubscriberController);
    service = module.get<SubscriberService>(SubscriberService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Subscribe', () => {
    it('should return an object containing url and topic', async () => {
      const result = {
        url: 'http://localhost:2000/test1',
        topic: 'topic1',
      };
      jest
        .spyOn(service, 'create')
        .mockImplementation(async () => result as any);
      jest.enableAutomock();
      expect(
        await controller.subscribe('topic1', {
          url: 'http://localhost:2000/test1',
        }),
      ).toEqual(result);
    });
  });
});
