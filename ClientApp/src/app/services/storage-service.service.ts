import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor(private db: Dexie) {}

  
}
