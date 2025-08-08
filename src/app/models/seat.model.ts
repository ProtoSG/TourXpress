export interface SeatData {
  id: number;
  passengerId: number;
  seatsNumber: number;
  floor: number;
  price: number;
  status: "available" | "occupied";
}

export interface SeatBackend {
  seat_id: number;
  bus_id: number;
  seat_number: number;
  floor: number;
  price: number;
  availability: number;
}

export interface Seat {
  id: number;
  busId: number;
  seatNumber: number;
  floor: number;
  price: number;
  availability: number;
}
