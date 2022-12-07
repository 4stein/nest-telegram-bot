import { ConfigService } from '@nestjs/config';
import { ITelegramOptions } from './../telegram/telegram.interface';

export const getTelegramConfig = (
  configService: ConfigService,
): ITelegramOptions => {
  //   const token = configService.get(
  //     'TELEGRAM_TOKEN',
  //   );
  //   const chatId = configService.get('CHAT_ID') ?? '';
  //   if (!token) {
  //     throw new Error('TELEGRAM_TOKEN is missed');
  //   }
  //   console.log(token);

  return {
    chatId: '-640595433',
    token: '5958937282:AAGLjeMXEWL3XHXmuPHujI9oB4qx2yIobmY',
  };
};
