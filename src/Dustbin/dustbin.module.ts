import { Module } from '@nestjs/common';
import { DustbinService } from './dustbin.service';
import { DustbinController } from './dustbin.controller';
import { Dustbin, DustbinSchema } from './entities/dustbin.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dustbin.name, schema: DustbinSchema }])],
  controllers: [DustbinController],
  providers: [DustbinService]
})
export class DustbinModule {}
