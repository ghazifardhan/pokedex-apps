// To parse this data:
//
//   import { Convert, PokemonDetailModel } from "./file";
//
//   const pokemonDetailModel = Convert.toPokemonDetailModel(json);

export interface PokemonDetailModel {
    abilities?:                Ability[];
    base_experience?:          number;
    forms?:                    Species[];
    game_indices?:             GameIndex[];
    height?:                   number;
    held_items?:               any[];
    id?:                       number;
    is_default?:               boolean;
    location_area_encounters?: string;
    moves?:                    Move[];
    name?:                     string;
    order?:                    number;
    past_types?:               any[];
    species?:                  Species;
    sprites?:                  Sprites;
    stats?:                    Stat[];
    types?:                    Type[];
    weight?:                   number;
}

export interface Ability {
    ability?:   Species;
    is_hidden?: boolean;
    slot?:      number;
}

export interface Species {
    name?: string;
    url?:  string;
}

export interface GameIndex {
    game_index?: number;
    version?:    Species;
}

export interface Move {
    move?:                  Species;
    version_group_details?: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at?:  number;
    move_learn_method?: Species;
    version_group?:     Species;
}

export interface Sprites {
    back_default?:       string;
    back_female?:        null;
    back_shiny?:         string;
    back_shiny_female?:  null;
    front_default?:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
    other?:              Other;
    versions?:           Versions;
}

export interface Other {
    dream_world?:        DreamWorld;
    "official-artwork"?: OfficialArtwork;
}

export interface DreamWorld {
    front_default?: string;
    front_female?:  null;
}

export interface OfficialArtwork {
    front_default?: string;
}

export interface Versions {
    "generation-i"?:    GenerationI;
    "generation-ii"?:   GenerationIi;
    "generation-iii"?:  GenerationIii;
    "generation-iv"?:   GenerationIv;
    "generation-v"?:    GenerationV;
    "generation-vi"?:   GenerationVi;
    "generation-vii"?:  GenerationVii;
    "generation-viii"?: GenerationViii;
}

export interface GenerationI {
    "red-blue"?: RedBlue;
    yellow?:     RedBlue;
}

export interface RedBlue {
    back_default?:  string;
    back_gray?:     string;
    front_default?: string;
    front_gray?:    string;
}

export interface GenerationIi {
    crystal?: Crystal;
    gold?:    Crystal;
    silver?:  Crystal;
}

export interface Crystal {
    back_default?:  string;
    back_shiny?:    string;
    front_default?: string;
    front_shiny?:   string;
}

export interface GenerationIii {
    emerald?:             Emerald;
    "firered-leafgreen"?: Crystal;
    "ruby-sapphire"?:     Crystal;
}

export interface Emerald {
    front_default?: string;
    front_shiny?:   string;
}

export interface GenerationIv {
    "diamond-pearl"?:        DiamondPearl;
    "heartgold-soulsilver"?: DiamondPearl;
    platinum?:               DiamondPearl;
}

export interface DiamondPearl {
    back_default?:       string;
    back_female?:        null;
    back_shiny?:         string;
    back_shiny_female?:  null;
    front_default?:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
}

export interface GenerationV {
    "black-white"?: BlackWhite;
}

export interface BlackWhite {
    animated?:           Animated;
    back_default?:       string;
    back_female?:        null;
    back_shiny?:         string;
    back_shiny_female?:  null;
    front_default?:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
}

export interface Animated {
    back_default?:       string;
    back_female?:        null;
    back_shiny?:         string;
    back_shiny_female?:  null;
    front_default?:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
}

export interface GenerationVi {
    "omegaruby-alphasapphire"?: OmegarubyAlphasapphire;
    "x-y"?:                     OmegarubyAlphasapphire;
}

export interface OmegarubyAlphasapphire {
    front_default?:      string;
    front_female?:       null;
    front_shiny?:        string;
    front_shiny_female?: null;
}

export interface GenerationVii {
    icons?:                  Icons;
    "ultra-sun-ultra-moon"?: OmegarubyAlphasapphire;
}

export interface Icons {
    front_default?: string;
    front_female?:  null;
}

export interface GenerationViii {
    icons?: Icons;
}

export interface Stat {
    base_stat?: number;
    effort?:    number;
    stat?:      Species;
}

export interface Type {
    slot?: number;
    type?: Species;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toPokemonDetailModel(json: string): PokemonDetailModel {
        return JSON.parse(json);
    }

    public static pokemonDetailModelToJson(value: PokemonDetailModel): string {
        return JSON.stringify(value);
    }
}
