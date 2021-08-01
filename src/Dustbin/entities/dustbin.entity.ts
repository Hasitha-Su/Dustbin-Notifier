import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DustbinDocument = Dustbin & Document;

@Schema()
export class Dustbin {

  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  location: string;
}

export const DustbinSchema = SchemaFactory.createForClass(Dustbin)