import Api from "../../api/api";
import { PokemonListModel } from "../../models/pokemon-list-model";

export class PokemonProvider {

    private api: Api = new Api();

    getPokemons = async (offset: number, limit: number): Promise<PokemonListModel> => {
        try {
            const response = await this.api.service.get(
                '/pokemon',
                {
                    params: {
                        offset: offset,
                        limit: limit
                    }
                }
            );
            return Promise.resolve(response.data);
        } catch (e) {
            const response: PokemonListModel = {
                count: 0,
                next: undefined,
                previous: undefined,
                results: []
            }
            return Promise.reject(response);
        }
    }

}