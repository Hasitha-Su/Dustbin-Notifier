import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DustbinService } from './dustbin.service';
import { CreateDustbinDto } from './dto/create-dustbin.dto';
import { UpdateDustbinDto } from './dto/update-dustbin.dto';

@Controller('dustbin')
export class DustbinController {

  constructor(private readonly DustbinService: DustbinService) {}

  @Post()
  create(@Body() createDustbinDto: CreateDustbinDto) {
    return this.DustbinService.create(createDustbinDto);
  }

  @Get()
  findAll() {
    return this.DustbinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DustbinService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDustbinDto: UpdateDustbinDto) {
    return this.DustbinService.update(id, updateDustbinDto);
  }

  @Get(':id/FULL')
  updateDustbinStat(@Param('id') id: string) {
    return this.DustbinService.updateStatus(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.DustbinService.delete(id);
  }
}