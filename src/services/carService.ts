
import { Car, CarFilters, SortDirection } from '@/types/car';
import { mockCars } from '@/lib/mock-data';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getCars(
  page: number = 1,
  limit: number = 10,
  filters: CarFilters = { search: '', brand: '', minPrice: 0, maxPrice: 1000000, fuelType: '', seats: 0 },
  sortBy: SortDirection = 'asc'
): Promise<{ cars: Car[], total: number }> {
  await delay(800); // Simulate network delay

  let filteredCars = [...mockCars];

  // Apply search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase().includes(searchLower) || 
      car.model.toLowerCase().includes(searchLower)
    );
  }

  // Apply brand filter
  if (filters.brand && filters.brand !== 'All Brands') {
    filteredCars = filteredCars.filter(car => car.brand === filters.brand);
  }

  // Apply price range filter
  filteredCars = filteredCars.filter(car => 
    car.price >= filters.minPrice && car.price <= filters.maxPrice
  );

  // Apply fuel type filter
  if (filters.fuelType && filters.fuelType !== 'All Types') {
    filteredCars = filteredCars.filter(car => car.fuelType === filters.fuelType);
  }

  // Apply seats filter
  if (filters.seats > 0) {
    filteredCars = filteredCars.filter(car => car.seats >= filters.seats);
  }

  // Apply sorting
  filteredCars.sort((a, b) => {
    return sortBy === 'asc' ? a.price - b.price : b.price - a.price;
  });

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);

  return {
    cars: paginatedCars,
    total: filteredCars.length
  };
}

export async function getCarById(id: number): Promise<Car | null> {
  await delay(500); // Simulate network delay
  
  const car = mockCars.find(car => car.id === id);
  return car || null;
}
