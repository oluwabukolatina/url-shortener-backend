import { Document } from 'mongoose';

export interface Url extends Document{
         shortenedUrl: string;
         originalUrl: string;
       }
