import { Seat, SeatBackend } from "@models/seat.model";

export function seatAdapter(seat: SeatBackend): Seat {
  return {
    id: seat.seat_id,
    busId: seat.bus_id,
    seatNumber: seat.seat_number,
    floor: seat.floor,
    price: seat.price,
    availability: seat.availability,
  }
}
