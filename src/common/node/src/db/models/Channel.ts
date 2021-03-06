import {
  Column,
  PrimaryColumn,
  Entity,
  ManyToOne,
  Index,
  JoinColumn,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

import { User } from './User';

@Entity({ name: 'channels' })
@ObjectType()
export class Channel extends BaseEntity {
  @Index('channel_id_pk')
  @PrimaryColumn('varchar', { length: 36, nullable: false })
  @Field()
  id!: string;

  @Column('varchar', { length: 128, nullable: false })
  @Field()
  title!: string;

  @ManyToOne(
    () => User,
    user => user.username,
    {
      onDelete: 'CASCADE',
      eager: true,
      nullable: false,
    }
  )
  @JoinColumn({ name: 'username' })
  @Field(() => User)
  user!: User;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  created_at?: Date;

  @Column('bigint', { default: () => 0, nullable: false })
  @Field(() => Int)
  subscribers!: bigint;

  @Column('text', { nullable: true })
  @Field({ nullable: true })
  description?: string;

  static itemType = '02';
}
