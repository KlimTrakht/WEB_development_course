import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id = 0
  @Column({ type: 'varchar', length: 100 })
  @Index({ unique: true })
  userName = ''
  @Column({ type: 'varchar', length: 100 })
  password = ''
  @Column({ type: 'datetime' })
  createdAt: Date = new Date()
}
