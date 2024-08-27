import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flight } from './flights.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}

  findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  findOne(id: number): Promise<Flight> {
    return this.flightRepository.findOneBy({ id });
  }

  create(flight: Flight): Promise<Flight> {
    return this.flightRepository.save(flight);
  }

  async remove(id: number): Promise<void> {
    await this.flightRepository.delete(id);
  }
}