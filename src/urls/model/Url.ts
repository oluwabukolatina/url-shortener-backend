import { Schema, model } from 'mongoose';
import { Url } from '../interface/url.interface';

const UrlSchema = new Schema({
  newUrl: { type: String, required: true },
  originalUrl: { type: String, required: true },

});

export default model<Url>('Url', UrlSchema);
