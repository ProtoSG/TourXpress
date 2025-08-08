import { Trip, TripBackend } from "@models/trip.model";

export function tripAdapter(trip: TripBackend): Trip {
  return {
    id: trip.trip_id,
    boarding: {
      id: trip.boarding.terminal_id,
      time: trip.boarding.time,
      location: trip.boarding.location,
    },
    disembarkation: {
      id: trip.disembarkation.terminal_id,
      time: trip.disembarkation.time,
      location: trip.disembarkation.location,
    },
    service: {
      id: trip.service.service_id,
      name: trip.service.name,
    },
    bus: {
      id: trip.bus.bus_id,
      floorNumbers: trip.bus.floor_numbers,
    },
    seatsAvailable: trip.seats_available,
    price: trip.price
  }
}
