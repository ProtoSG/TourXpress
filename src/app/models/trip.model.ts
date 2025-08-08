import { Bus, BusBackend } from "./bus.model";
import { Service, ServiceBackend } from "./service.model";
import { Terminal, TerminalBackend } from "./terminal.model";

export interface TripBackend {
  trip_id: number;
  boarding: TerminalBackend;
  disembarkation: TerminalBackend;
  service: ServiceBackend;
  bus: BusBackend;
  seats_available: number;
  price: number;
}

export interface Trip {
  id: number;
  boarding: Terminal;
  disembarkation: Terminal;
  service: Service;
  bus: Bus;
  seatsAvailable: number;
  price: number;
}
