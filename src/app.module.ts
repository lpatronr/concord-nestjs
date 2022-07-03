import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), DatabaseModule, UserModule],
})
export class AppModule {}
