
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { CarFilters as CarFiltersType } from '@/types/car';
import { carBrands, fuelTypes, seats } from '@/lib/mock-data';

interface CarFiltersProps {
  filters: CarFiltersType;
  maxPrice: number;
  onFiltersChange: (filters: CarFiltersType) => void;
  onResetFilters: () => void;
}

const CarFilters: React.FC<CarFiltersProps> = ({ 
  filters, 
  maxPrice, 
  onFiltersChange,
  onResetFilters 
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, search: e.target.value });
  };

  const handleBrandChange = (value: string) => {
    onFiltersChange({ ...filters, brand: value });
  };

  const handleFuelTypeChange = (value: string) => {
    onFiltersChange({ ...filters, fuelType: value });
  };

  const handleSeatsChange = (value: string) => {
    onFiltersChange({ ...filters, seats: Number(value) });
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({
      ...filters,
      minPrice: value[0],
      maxPrice: value[1] || maxPrice
    });
  };

  return (
    <div className="bg-card rounded-lg shadow-sm border p-4 animate-fade-in">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by brand or model..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Select 
            value={filters.brand} 
            onValueChange={handleBrandChange}
          >
            <SelectTrigger id="brand">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              {carBrands.map(brand => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select 
            value={filters.fuelType} 
            onValueChange={handleFuelTypeChange}
          >
            <SelectTrigger id="fuelType">
              <SelectValue placeholder="Select Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              {fuelTypes.map(fuel => (
                <SelectItem key={fuel} value={fuel}>
                  {fuel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="seats">Minimum Seats</Label>
          <Select 
            value={filters.seats.toString()} 
            onValueChange={handleSeatsChange}
          >
            <SelectTrigger id="seats">
              <SelectValue placeholder="Select Minimum Seats" />
            </SelectTrigger>
            <SelectContent>
              {seats.map(seat => (
                <SelectItem key={seat} value={seat.toString()}>
                  {seat === 0 ? 'Any' : seat.toString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <Label htmlFor="price-range">Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${filters.minPrice.toLocaleString()} - ${filters.maxPrice.toLocaleString()}
            </span>
          </div>
          <Slider
            id="price-range"
            min={0}
            max={maxPrice}
            step={1000}
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={handlePriceChange}
            className="py-4"
          />
        </div>

        <Button variant="outline" className="w-full" onClick={onResetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default CarFilters;
