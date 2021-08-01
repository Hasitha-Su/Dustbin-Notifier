import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDustbinDto } from './dto/create-Dustbin.dto';
import { UpdateDustbinStatDto } from './dto/update-Dustbin-stat.dto';
import { UpdateDustbinDto } from './dto/update-Dustbin.dto';
import { Dustbin, DustbinDocument } from './entities/dustbin.entity';
import {getConnection} from "typeorm";

@Injectable()
export class DustbinService {

  constructor(@InjectModel(Dustbin.name) private DustbinModel: Model<DustbinDocument>) { }

  async create(createDustbinDto: CreateDustbinDto) {
    const dustbin = new this.DustbinModel(createDustbinDto);
    return dustbin.save()
  }

  async findAll(): Promise<Dustbin[]> {
    return this.DustbinModel.find().exec();
  }

  async findById(id): Promise<Dustbin> {
    const dustbin = await this.DustbinModel.findById(id).exec();
    return dustbin;
  }

  async update(id, createDustbinDto: CreateDustbinDto): Promise<Dustbin> {
    return await this.DustbinModel.findByIdAndUpdate(id, createDustbinDto, { new: true });
  }

  async updateStatus(id) { 
    const dustbin = await this.DustbinModel.findById(id).exec();
    console.log(dustbin)
    dustbin.status = "FULL"
    console.log(dustbin)
    return await dustbin.save();
  }

  async delete(id): Promise<Dustbin> {
    return await this.DustbinModel.findByIdAndRemove(id);
  }
}