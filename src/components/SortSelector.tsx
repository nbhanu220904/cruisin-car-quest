
import React from 'react';
import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';
import { SortDirection } from '@/types/car';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface SortSelectorProps {
  sortDirection: SortDirection;
  onChange: (direction: SortDirection) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ sortDirection, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium">Sort by price:</span>
      <Select
        value={sortDirection}
        onValueChange={(value: SortDirection) => onChange(value)}
      >
        <SelectTrigger className="w-[130px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">
            <div className="flex items-center">
              <ArrowUpAZ className="mr-2 h-4 w-4" />
              <span>Low to High</span>
            </div>
          </SelectItem>
          <SelectItem value="desc">
            <div className="flex items-center">
              <ArrowDownAZ className="mr-2 h-4 w-4" />
              <span>High to Low</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelector;
