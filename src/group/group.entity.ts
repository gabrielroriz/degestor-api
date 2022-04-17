import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group')
export class Group {
  @Column('text')
  label: string;

  @PrimaryGeneratedColumn()
  key: string;
}
