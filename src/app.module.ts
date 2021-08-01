import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DustbinModule } from './Dustbin/dustbin.module';

@Module({
  imports: [
    DustbinModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.bhn76.mongodb.net/DustbinService')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
