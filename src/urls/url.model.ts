import { Schema, model } from 'mongoose';
import { IUrl } from './url.interface';

const UrlSchema = new Schema({
  shortenedUrl: String,
  originalUrl: { type: String, required: true },
  urlCode: String,

}, { timestamps: true });

export default model<IUrl>('Url', UrlSchema);
