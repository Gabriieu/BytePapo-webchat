import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", unique: true, length: 24 })
  username: string;

  @Column({ type: "varchar", length: 256 })
  password: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;
}
