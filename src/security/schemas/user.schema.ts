import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ROLES } from '../enums/roles.enum';
@Schema({
  toJSON: {
    virtuals: true,
  },
  timestamps: true,
})
export class User extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  salt: string;
  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;
  @Prop({ default: ROLES.ADMIN })
  role: ROLES;
}
const UserSchema = SchemaFactory.createForClass(User);
UserSchema.methods.toJSON = function (this: User) {
  const obj = this.toObject<User>() as Partial<User>;
  delete obj.password;
  delete obj.salt;
  return obj;
};
export { UserSchema };
