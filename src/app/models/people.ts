import { Record } from 'immutable';

const PeopleRecord = Record({
    name: "",
	height: "",
	mass: "",
	hair_color: "",
	skin_color: "",
	eye_color: "",
	birth_year: "",
	gender: "",
	homeworld: "",
	films: new Array<string>(),
	species: new Array<string>(),
	vehicles: new Array<string>(),
	starships: new Array<string>(),
	created: "",
	edited: "",
	url: ""
})
export interface IPeople {
    name?: string;
	height?: string;
	mass?: string;
	hair_color?: string;
	skin_color?: string;
	eye_color?: string;
	birth_year?: string;
	gender?: string;
	homeworld?: string;
	films?: Array<string>;
	species?: Array<string>;
	vehicles?: Array<string>;
	starships?: Array<string>;
	created?: string;
	edited?: string;
	url?: string;
}
export class People extends PeopleRecord implements IPeople {
    name?: string;
	height?: string;
	mass?: string;
	hair_color?: string;
	skin_color?: string;
	eye_color?: string;
	birth_year?: string;
	gender?: string;
	homeworld?: string;
	films?: Array<string>;
	species?: Array<string>;
	vehicles?: Array<string>;
	starships?: Array<string>;
	created?: string;
	edited?: string;
	url?: string;

    constructor(i: IPeople) {
        super(i);
    }
}