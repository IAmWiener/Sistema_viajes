import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { FlightsService } from './flights/flights.service';
import { Flight } from './flights/flights.entity';

@Controller('vuelos')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get()
  findAll(): Promise<Flight[]> {
    return this.flightsService.findAll();
  }

  @Post('/reservar')
  create(@Body() flight: Flight): Promise<Flight> {
    return this.flightsService.create(flight);
  }

  @Delete('/cancelar/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.flightsService.remove(id);
  }
}