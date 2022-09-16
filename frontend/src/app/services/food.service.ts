import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
  }

  getFoodsBySearchTerm( searchTerm: string):Food[] {
    return this.getAll().filter( food => food.name.toLowerCase().includes( searchTerm.toLowerCase()))
  }
}
