import { Car } from "@/types/car";

export const carBrands = [
  "All Brands",
  "Toyota",
  "Honda",
  "Ford",
  "BMW",
  "Mercedes",
  "Audi",
  "Volkswagen",
  "Tesla",
  "Hyundai",
  "Kia",
];

export const fuelTypes = [
  "All Types",
  "Petrol",
  "Diesel",
  "Electric",
  "Hybrid",
];

export const seats = [0, 2, 4, 5, 7, 8];

export const mockCars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
    mileage: 15000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://cars.usnews.com/static/images/Auto/izmo/i94428619/2019_toyota_camry_angularfront.jpg",
    engine: "2.5L",
    color: "Silver",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2021,
    price: 22000,
    mileage: 18000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image: "https://static.pakwheels.com/2022/02/Honda-Civic-png.jpg",
    engine: "1.8L",
    color: "Blue",
  },
  {
    id: 3,
    brand: "Ford",
    model: "Mustang",
    year: 2023,
    price: 45000,
    mileage: 5000,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 4,
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D",
    engine: "5.0L V8",
    color: "Red",
  },
  {
    id: 4,
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: 42000,
    mileage: 12000,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1556800572-1b8aeaee049d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym13JTIwM3xlbnwwfHwwfHx8MA%3D%3D",
    engine: "2.0L",
    color: "Black",
  },
  {
    id: 5,
    brand: "Mercedes",
    model: "E-Class",
    year: 2021,
    price: 55000,
    mileage: 15000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lcmNlZGVzJTIwZSUyMGNsYXNzfGVufDB8fDB8fHww",
    engine: "3.0L",
    color: "Silver",
  },
  {
    id: 6,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 48000,
    mileage: 8000,
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D",
    engine: "Electric",
    color: "White",
  },
  {
    id: 7,
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: 40000,
    mileage: 10000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVkaSUyMGE0fGVufDB8fDB8fHww",
    engine: "2.0L",
    color: "Gray",
  },
  {
    id: 8,
    brand: "Volkswagen",
    model: "Golf",
    year: 2021,
    price: 28000,
    mileage: 20000,
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sa3N3YWdlbiUyMGdvbGZ8ZW58MHx8MHx8fDA%3D",
    engine: "1.4L",
    color: "Blue",
  },
  {
    id: 9,
    brand: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 32000,
    mileage: 5000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/10134/1694668706095/front-left-side-47.jpg",
    engine: "1.6L",
    color: "Green",
  },
  {
    id: 10,
    brand: "Kia",
    model: "Sportage",
    year: 2022,
    price: 30000,
    mileage: 12000,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2023-kia-sportage-hybrid-sx-prestige-awd-206-1673464779.jpg?crop=0.779xw:0.583xh;0.205xw,0.302xh&resize=1200:*",
    engine: "2.0L",
    color: "Silver",
  },
  {
    id: 11,
    brand: "Toyota",
    model: "RAV4",
    year: 2022,
    price: 33000,
    mileage: 9000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RhJTIwcmF2NHxlbnwwfHwwfHx8MA%3D%3D",
    engine: "2.5L",
    color: "White",
  },
  {
    id: 12,
    brand: "Honda",
    model: "Accord",
    year: 2021,
    price: 27000,
    mileage: 16000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://www.honda-mideast.com/en/-/media/accord-2021-launch-pr-detailed-image/21ym-accord_sport_f34_sonic_gray.png",
    engine: "1.5L",
    color: "Black",
  },
  {
    id: 13,
    brand: "Ford",
    model: "Explorer",
    year: 2022,
    price: 42000,
    mileage: 11000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 7,
    image:
      "https://images.unsplash.com/photo-1625229335420-2c96bcc0ea53?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBleHBsb3JlcnxlbnwwfHwwfHx8MA%3D%3D",
    engine: "3.0L",
    color: "Blue",
  },
  {
    id: 14,
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 65000,
    mileage: 5000,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1549925862-990918686bcd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJtdyUyMHg1fGVufDB8fDB8fHww",
    engine: "3.0L",
    color: "Black",
  },
  {
    id: 15,
    brand: "Mercedes",
    model: "GLC",
    year: 2022,
    price: 58000,
    mileage: 8000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1680089363248-2cb1e47a7c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lcmNlZGVzJTIwZ2xjfGVufDB8fDB8fHww",
    engine: "2.0L",
    color: "Silver",
  },
  {
    id: 16,
    brand: "Tesla",
    model: "Model Y",
    year: 2023,
    price: 55000,
    mileage: 4000,
    fuelType: "Electric",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlc2xhJTIwbW9kZWwlMjB5fGVufDB8fDB8fHww",
    engine: "Electric",
    color: "White",
  },
  {
    id: 17,
    brand: "Audi",
    model: "Q5",
    year: 2021,
    price: 48000,
    mileage: 15000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1606664669503-0da1a5c9e640?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF1ZGklMjBxNXxlbnwwfHwwfHx8MA%3D%3D",
    engine: "2.0L",
    color: "Gray",
  },
  {
    id: 18,
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2022,
    price: 35000,
    mileage: 12000,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://gaadiwaadi.com/wp-content/uploads/2020/01/Volkswagen-Tiguan2-1068x601.jpg",
    engine: "2.0L",
    color: "Black",
  },
  {
    id: 19,
    brand: "Hyundai",
    model: "Santa Fe",
    year: 2022,
    price: 38000,
    mileage: 10000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 7,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2024-hyundai-santa-fe-155-65fb0b128f413.jpg?crop=0.670xw:0.565xh;0.167xw,0.257xh&resize=2048:*",
    engine: "1.6L",
    color: "Red",
  },
  {
    id: 20,
    brand: "Kia",
    model: "Sorento",
    year: 2023,
    price: 40000,
    mileage: 6000,
    fuelType: "Diesel",
    transmission: "Automatic",
    seats: 7,
    image:
      "https://images.unsplash.com/photo-1666710200973-18e616570a27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpYSUyMHNvcmVudG98ZW58MHx8MHx8fDA%3D",
    engine: "2.2L",
    color: "Blue",
  },
  {
    id: 21,
    brand: "Toyota",
    model: "Highlander",
    year: 2022,
    price: 45000,
    mileage: 12000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seats: 8,
    image:
      "https://images.unsplash.com/photo-1677658610900-75ce56fda4e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwaGlnaGxhbmRlcnxlbnwwfHwwfHx8MA%3D%3D",
    engine: "3.5L",
    color: "Silver",
  },
  {
    id: 22,
    brand: "Honda",
    model: "CR-V",
    year: 2021,
    price: 32000,
    mileage: 18000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2017-honda-cr-v-110-1534185223.jpg?crop=0.871xw:0.801xh;0,0.199xh&resize=1200:*",
    engine: "1.5L",
    color: "Gray",
  },
  {
    id: 23,
    brand: "Ford",
    model: "F-150",
    year: 2023,
    price: 52000,
    mileage: 5000,
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZCUyMGYlMjAxNTB8ZW58MHx8MHx8fDA%3D",
    engine: "5.0L V8",
    color: "Black",
  },
];
