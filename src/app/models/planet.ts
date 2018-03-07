import { Record } from 'immutable';

const PlanetRecord = Record({
    name: "",
	rotation_period: "",
	orbital_period: "",
	diameter: "",
	climate: "",
	gravity: "",
	terrain: "",
	surface_water: "",
	population: "",
	residents: new Array<string>(),
	films:  new Array<string>(),
	created:  "",
	edited:  "",
    url:  ""
})
export interface IPlanet {
    name?: string;
	rotation_period?: string;
	orbital_period?: string;
	diameter?: string;
	climate?: string;
	gravity?: string;
	terrain?: string;
	surface_water?: string;
	population?: string;
	residents?: Array<string>;
	films?:  Array<string>;
	created?:  string;
	edited?:  string;
    url?:  string;
}
export class Planet extends PlanetRecord implements IPlanet {
    name?: string;
	rotation_period?: string;
	orbital_period?: string;
	diameter?: string;
	climate?: string;
	gravity?: string;
	terrain?: string;
	surface_water?: string;
	population?: string;
	residents?: Array<string>;
	films?:  Array<string>;
	created?:  string;
	edited?:  string;
    url?:  string;

    constructor(i: IPlanet) {
        super(i);
    }
}