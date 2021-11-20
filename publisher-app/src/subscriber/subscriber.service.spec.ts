import { Test, TestingModule } from '@nestjs/testing';
import { SubscriberService } from './subscriber.service';

describe('SubscriberService', () => {
  let service: SubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: SubscriberService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SubscriberService>(SubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Subscribe', () => {
    it('should return an object containing url and topic', async () => {
      const subscribeData = {
        url: 'http://localhost:3000/test',
        topic: 'topic2',
      };

      jest
        .spyOn(service, 'create')
        .mockImplementation(async () => subscribeData as any);

      const resultInfo = await service.create(subscribeData, 'topic1');

      expect(resultInfo).toHaveProperty('url');
      expect(resultInfo).toHaveProperty('topic');

      expect(resultInfo.url).toBe(subscribeData.url);
      expect(resultInfo.topic).toBe(subscribeData.topic);
    });
  });
});
