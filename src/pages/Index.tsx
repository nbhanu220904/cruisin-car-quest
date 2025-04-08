import React, { useState, useEffect } from 'react';
import { Car, CarFilters as CarFiltersType, SortDirection } from '@/types/car';
import { getCars } from '@/services/carService';
import { getWishlist, toggleWishlist } from '@/services/wishlistService';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import CarCard from '@/components/CarCard';
import CarFilters from '@/components/CarFilters';
import Pagination from '@/components/Pagination';
import SortSelector from '@/components/SortSelector';
import CarDetailsModal from '@/components/CarDetailsModal';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const itemsPerPage = 10;
  const maxPrice = 100000; // Arbitrary max price for the slider
  
  const [filters, setFilters] = useState<CarFiltersType>({
    search: '',
    brand: '',
    minPrice: 0,
    maxPrice: maxPrice,
    fuelType: '',
    seats: 0
  });

  // Load cars based on filters
  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await getCars(currentPage, itemsPerPage, filters, sortDirection);
        setCars(result.cars);
        setTotalItems(result.total);
      } catch (err) {
        setError('Failed to load cars. Please try again later.');
        console.error('Error loading cars:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadCars();
  }, [currentPage, filters, sortDirection]);
  
  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = getWishlist();
    setWishlist(storedWishlist);
  }, []);
  
  const handleFiltersChange = (newFilters: CarFiltersType) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };
  
  const handleResetFilters = () => {
    setFilters({
      search: '',
      brand: '',
      minPrice: 0,
      maxPrice: maxPrice,
      fuelType: '',
      seats: 0
    });
    setCurrentPage(1);
  };
  
  const handleSortChange = (direction: SortDirection) => {
    setSortDirection(direction);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleToggleWishlist = (carId: number) => {
    const newWishlist = toggleWishlist(carId);
    setWishlist(newWishlist);
    
    const car = cars.find(c => c.id === carId);
    if (car) {
      toast({
        title: newWishlist.includes(carId) 
          ? `${car.brand} ${car.model} added to wishlist` 
          : `${car.brand} ${car.model} removed from wishlist`,
        duration: 2000
      });
    }
  };
  
  const handleCardClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Your Dream Car</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar / Filters */}
          <aside className="space-y-6">
            <CarFilters 
              filters={filters} 
              maxPrice={maxPrice}
              onFiltersChange={handleFiltersChange}
              onResetFilters={handleResetFilters}
            />
          </aside>
          
          {/* Main content */}
          <div className="space-y-6">
            {/* Results header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-semibold">
                  {loading ? 'Loading cars...' : `${totalItems} cars found`}
                </h2>
                {wishlist.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    {wishlist.length} {wishlist.length === 1 ? 'car' : 'cars'} in wishlist
                  </p>
                )}
              </div>
              
              <SortSelector 
                sortDirection={sortDirection} 
                onChange={handleSortChange} 
              />
            </div>
            
            {/* Loading state */}
            {loading && (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">Loading cars...</span>
              </div>
            )}
            
            {/* Error state */}
            {error && !loading && (
              <div className="py-12 text-center">
                <p className="text-destructive">{error}</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </Button>
              </div>
            )}
            
            {/* Empty state */}
            {!loading && !error && cars.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg mb-4">No cars match your search criteria</p>
                <Button onClick={handleResetFilters}>Clear filters</Button>
              </div>
            )}
            
            {/* Results grid */}
            {!loading && !error && cars.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
                {cars.map(car => (
                  <CarCard 
                    key={car.id}
                    car={car}
                    inWishlist={wishlist.includes(car.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onClick={handleCardClick}
                  />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {!loading && !error && totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </main>
      
      {/* Car details modal */}
      <CarDetailsModal 
        car={selectedCar}
        isOpen={isModalOpen}
        inWishlist={selectedCar ? wishlist.includes(selectedCar.id) : false}
        onOpenChange={setIsModalOpen}
        onToggleWishlist={handleToggleWishlist}
      />
    </div>
  );
};

export default Index;
