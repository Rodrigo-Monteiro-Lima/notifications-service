import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [],
})
export class HttpModule {}
