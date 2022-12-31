import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
// import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Count recipient notifications', () => {
  it('should be able to recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );
    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação'),
        recipientId: 'recipient-1',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação'),
        recipientId: 'recipient-2',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação'),
        recipientId: 'recipient-1',
      }),
    );
    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });
    expect(count).toBe(2);
  });
});
