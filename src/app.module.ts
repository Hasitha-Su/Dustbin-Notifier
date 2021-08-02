import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DustbinModule } from './Dustbin/dustbin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DustbinModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
