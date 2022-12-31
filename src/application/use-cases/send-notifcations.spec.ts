import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'THis is a notification',
      recipientId: 'example-recipient-id',
    });
    expect(notification).toBeTruthy();
    // expect(notificationsRepository.notifications).toHaveLength(1);
    // expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
