import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'tbbgkvrw',
  database: 'tbbgkvrw',
  host: 'rajje.db.elephantsql.com',
  password: '767V65KkWW836dowq1AxcZsQF-O2a9Xb',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: true,
};
