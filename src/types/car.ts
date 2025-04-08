
export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  seats: number;
  image: string;
  engine: string;
  color: string;
}

export type SortDirection = 'asc' | 'desc';

export interface CarFilters {
  search: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
  fuelType: string;
  seats: number;
}
