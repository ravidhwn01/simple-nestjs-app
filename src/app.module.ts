import { Module } from '@nestjs/common';

import { CarModule } from './car/car.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CarModule, UserModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
