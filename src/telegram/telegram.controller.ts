import { TelegramService } from './telegram.service';
import { Controller, Post } from '@nestjs/common';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post()
  sendMessage(): any {
    const message = 'Test';
    return this.telegramService.sendMessage(message);
  }
}
