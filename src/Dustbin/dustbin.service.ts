import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDustbinDto } from './dto/create-dustbin.dto';
import { Dustbin, DustbinDocument } from './entities/dustbin.entity';
const twilio = require('twilio');

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

    const accountSid = process.env.TWILLO_ACC_NUM; // Your Account SID from www.twilio.com/console
    const authToken = process.env.TWILLO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Hello from Node',
        to: '+12345678901', // Text this number
        from: '+12345678901', // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));


    return await dustbin.save();
  }

  async delete(id): Promise<Dustbin> {
    return await this.DustbinModel.findByIdAndRemove(id);
  }
}