import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from './group/group.module';
import { config } from './orm.config';

@Module({
  imports: [GroupModule, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
