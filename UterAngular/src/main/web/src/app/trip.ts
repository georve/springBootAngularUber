import {Driver} from "./driver";
import {Vehicle} from "./vehicle";

export class Trip {
    id:number;
    dateTrip:string;
    vehicle:Vehicle;
    driver:Driver;
}
