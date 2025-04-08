
import { Car } from '@/types/car';

const WISHLIST_KEY = 'car_finder_wishlist';

export function getWishlist(): number[] {
  const wishlistStr = localStorage.getItem(WISHLIST_KEY);
  if (!wishlistStr) return [];
  
  try {
    return JSON.parse(wishlistStr);
  } catch (e) {
    console.error('Failed to parse wishlist', e);
    return [];
  }
}

export function addToWishlist(carId: number): number[] {
  const currentWishlist = getWishlist();
  if (!currentWishlist.includes(carId)) {
    const newWishlist = [...currentWishlist, carId];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));
    return newWishlist;
  }
  return currentWishlist;
}

export function removeFromWishlist(carId: number): number[] {
  const currentWishlist = getWishlist();
  const newWishlist = currentWishlist.filter(id => id !== carId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));
  return newWishlist;
}

export function isInWishlist(carId: number): boolean {
  const wishlist = getWishlist();
  return wishlist.includes(carId);
}

export function toggleWishlist(carId: number): number[] {
  if (isInWishlist(carId)) {
    return removeFromWishlist(carId);
  } else {
    return addToWishlist(carId);
  }
}
