import { Document } from 'mongoose';

export interface Url extends Document{
         newUrl: string;
         originalUrl: string;
       }
