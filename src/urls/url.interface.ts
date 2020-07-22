import { Document } from 'mongoose';

export interface IUrl extends Document {
  shortenedUrl: string;

  originalUrl: string;
  urlCode: string;
}
