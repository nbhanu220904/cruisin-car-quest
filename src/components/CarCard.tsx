
import React from 'react';
import { Heart } from 'lucide-react';
import { Car } from '@/types/car';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface CarCardProps {
  car: Car;
  inWishlist: boolean;
  onToggleWishlist: (carId: number) => void;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, inWishlist, onToggleWishlist, onClick }) => {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(car.id);
  };

  return (
    <Card 
      className="car-card-hover overflow-hidden"
      onClick={() => onClick(car)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.model}`} 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500" 
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "absolute top-2 right-2 bg-white/80 dark:bg-black/50 rounded-full",
            inWishlist && "wishlist-active"
          )}
          onClick={handleWishlistClick}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={cn(
              "h-5 w-5 transition-all", 
              inWishlist && "animate-pulse-heart"
            )} 
          />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{car.brand} {car.model}</h3>
            <p className="text-sm text-muted-foreground">{car.year} • {car.transmission}</p>
          </div>
          <Badge variant="outline" className="bg-primary/10">
            ${car.price.toLocaleString()}
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Fuel Type</span>
            <span className="text-sm">{car.fuelType}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Mileage</span>
            <span className="text-sm">{car.mileage.toLocaleString()} mi</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Engine</span>
            <span className="text-sm">{car.engine}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Seats</span>
            <span className="text-sm">{car.seats}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="default" size="sm" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
