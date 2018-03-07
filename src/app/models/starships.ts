import { Record } from 'immutable';

const StarshipsRecord = Record({
	name: "",
	model: "",
	manufacturer: "",
	cost_in_credits: "",
	length: "",
	max_atmosphering_speed: "",
	crew: "",
	passengers: "",
	cargo_capacity: "",
	consumables: "",
	hyperdrive_rating: "",
	MGLT: "",
	starship_class: "",
	pilots: "",
	films: new Array<string>(),
	created: "",
	edited: "",
	url: ""
})
export interface IStarships {
    name?: string;
	model?: string;
	manufacturer?: string;
	cost_in_credits?: string;
	length?: string;
	max_atmosphering_speed?: string;
	crew?: string;
	passengers?: string;
	cargo_capacity?: string;
	consumables?: string;
	hyperdrive_rating?: string;
	MGLT?: string;
	starship_class?: string;
	pilots?: string;
	films?: Array<string>;
	created?: string;
	edited?: string;
	url?: string;
}
export class Planet extends StarshipsRecord implements IStarships {
    name?: string;
	model?: string;
	manufacturer?: string;
	cost_in_credits?: string;
	length?: string;
	max_atmosphering_speed?: string;
	crew?: string;
	passengers?: string;
	cargo_capacity?: string;
	consumables?: string;
	hyperdrive_rating?: string;
	MGLT?: string;
	starship_class?: string;
	pilots?: string;
	films?: Array<string>;
	created?: string;
	edited?: string;
	url?: string;

    constructor(i: IStarships) {
        super(i);
    }
}