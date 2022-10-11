import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  lat: number;

  @Column()
  lon: number;

  // Bidirectional relation
  @ManyToOne(() => User, (user) => user.locations)
  user: User;
}
