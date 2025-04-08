
import React from 'react';
import { Car } from '@/types/car';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarDetailsModalProps {
  car: Car | null;
  isOpen: boolean;
  inWishlist: boolean;
  onOpenChange: (open: boolean) => void;
  onToggleWishlist: (carId: number) => void;
}

const CarDetailsModal: React.FC<CarDetailsModalProps> = ({
  car,
  isOpen,
  inWishlist,
  onOpenChange,
  onToggleWishlist
}) => {
  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px] p-0 overflow-hidden">
        <div className="relative aspect-video w-full">
          <img 
            src={car.image} 
            alt={`${car.brand} ${car.model}`} 
            className="w-full h-full object-cover"
          />
          <DialogClose className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70">
            <X className="h-5 w-5" />
          </DialogClose>
        </div>
        
        <div className="p-6">
          <DialogHeader className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-bold">
                  {car.brand} {car.model}
                </DialogTitle>
                <DialogDescription>
                  {car.year} • {car.transmission} • {car.mileage.toLocaleString()} miles
                </DialogDescription>
              </div>
              <div className="text-xl font-bold text-primary">${car.price.toLocaleString()}</div>
            </div>
          </DialogHeader>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Fuel Type</h4>
              <p>{car.fuelType}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Engine</h4>
              <p>{car.engine}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Color</h4>
              <p>{car.color}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Seats</h4>
              <p>{car.seats}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Transmission</h4>
              <p>{car.transmission}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Year</h4>
              <p>{car.year}</p>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <Button
              variant="outline"
              className={cn(
                "flex items-center gap-2",
                inWishlist && "wishlist-active border-red-500"
              )}
              onClick={() => onToggleWishlist(car.id)}
            >
              <Heart className="h-4 w-4" />
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </Button>
            <Button className="flex-1">Contact Seller</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailsModal;
