//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Hospitals')
export class HospitalsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  hospitalName: string;

  @Column('text', { nullable: true })
  address: string;

  @Column('text', { nullable: true })
  contactInformation: string;

  @Column('text', { nullable: true })
  specialties: string;

  @Column('text', { nullable: true })
  servicesOffered: string;

  @Column('text', { nullable: true })
  hoursOfOperation: string;

  @Column('text', { nullable: true })
  ratingsOrReviews: string;
}
