// To parse this data:
//
//   import { Convert, ItemDetailModel } from "./file";
//
//   const itemDetailModel = Convert.toItemDetailModel(json);

export interface ItemDetailModel {
    attributes?:          Category[];
    baby_trigger_for?:    null;
    category?:            Category;
    cost?:                number;
    effect_entries?:      EffectEntry[];
    flavor_text_entries?: FlavorTextEntry[];
    fling_effect?:        null;
    fling_power?:         null;
    game_indices?:        GameIndex[];
    held_by_pokemon?:     any[];
    id?:                  number;
    machines?:            any[];
    name?:                string;
    names?:               Name[];
    sprites?:             Sprites;
}

export interface Category {
    name?: string;
    url?:  string;
}

export interface EffectEntry {
    effect?:       string;
    language?:     Category;
    short_effect?: string;
}

export interface FlavorTextEntry {
    language?:      Category;
    text?:          string;
    version_group?: Category;
}

export interface GameIndex {
    game_index?: number;
    generation?: Category;
}

export interface Name {
    language?: Category;
    name?:     string;
}

export interface Sprites {
    default?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toItemDetailModel(json: string): ItemDetailModel {
        return JSON.parse(json);
    }

    public static itemDetailModelToJson(value: ItemDetailModel): string {
        return JSON.stringify(value);
    }
}
