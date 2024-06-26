//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('BloodDonations')
export class BloodDonationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  userId: number;

  @Column('date', { nullable: true })
  donationDate: Date;

  @Column('text', { nullable: true })
  location: string;

  @Column('text', { nullable: true })
  typeOfDonation: string;

  @Column('text', { nullable: true })
  notes: string;
}
