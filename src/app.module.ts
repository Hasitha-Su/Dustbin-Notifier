import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DustbinModule } from './Dustbin/dustbin.module';
import { MONGODB_CONNECTION } from './app.properties'

@Module({
  imports: [
    DustbinModule,
    MongooseModule.forRoot(MONGODB_CONNECTION)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
