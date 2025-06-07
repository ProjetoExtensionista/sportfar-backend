import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER_CLASS')
export class UserClass {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  enrolled: boolean;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'class_id' })
  classId: number;

  // TODO: Fix this
  //@ManyToOne(() => User, (user) => user.classe)
  //@JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  //user: User;
  //@ManyToOne(() => Class, (classe) => classe.user)
  //@JoinColumn({ name: 'class_id', referencedColumnName: 'id' })
  //classe: Class;
}
