// To parse this data:
//
//   import { Convert, PokemonListModel } from "./file";
//
//   const pokemonListModel = Convert.toPokemonListModel(json);

export interface PokemonListModel {
    count?:    number;
    next?:     string;
    previous?: string;
    results?:  Result[];
}

export interface Result {
    name?: string;
    url?:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPokemonListModel(json: string): PokemonListModel {
        return JSON.parse(json);
    }

    public static pokemonListModelToJson(value: PokemonListModel): string {
        return JSON.stringify(value);
    }
}
