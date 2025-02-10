import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User{
 
  @PrimaryGeneratedColumn({ name: "id" })
  id: number


  @Column("text", { name: "email", nullable: true, unique: true })//  declqrqtion en bqse
  email: string | null;// code nest

  @Column("text", { name: "firstname", nullable: true })
  firstName: string | null;


  @Column("text", { name: "lastname", nullable: true })
  lastName: string | null;


  @Column("text", { name: "phone", nullable: true })
  phone: string | null;


  @Column("text", { name: "picture", nullable: true })
  picture: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("text", { name: "saltRounds", nullable: true })
  saltRounds: string;


  @Column("text", { name: "token", nullable: true })
  token: string;

  @Column("boolean", { name: "active", nullable: true, default: true })
  active: boolean | false;


  @Column("timestamp with time zone", { name: "createdAt", nullable: true })
  createdAt: Date | null;


  @Column("integer", { name: "createdBy", nullable: true })
  createdBy: number | null;

  @Column("timestamp with time zone", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;


  @Column("integer", { name: "updatedBy", nullable: true })
  updatedBy: number | null;

  @Column("timestamp with time zone", { name: "deletedAt", nullable: true })
  deletedAt: Date | null;

  
  @BeforeInsert()
  eventCreatedAt() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  eventUpdatedAt() {
    this.updatedAt = new Date();
  }

  @BeforeRemove()
  eventDeletedAt() {
    this.deletedAt = new Date();
  }
}
