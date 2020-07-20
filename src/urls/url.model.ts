import { Schema, model } from 'mongoose';
import { Url } from './url.interface';

const UrlSchema = new Schema({
  shortenedUrl: { type: String, required: true },
  originalUrl: { type: String, required: true },

});

export default model<Url>('Url', UrlSchema);
