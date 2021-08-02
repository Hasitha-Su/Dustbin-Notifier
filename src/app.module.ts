import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DustbinModule } from './Dustbin/dustbin.module';

@Module({
  imports: [
    DustbinModule,
    MongooseModule.forRoot(`${process.env.MONGODB_CONNECTION}`)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
