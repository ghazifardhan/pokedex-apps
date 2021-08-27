import Api from "../../api/api";
import { PokemonDetailModel } from "../../models/pokemon-detail-model";

export class PokemonDetailProvider {

    private api: Api = new Api();

    getPokemonDetail = async (id: number): Promise<PokemonDetailModel> => {
        try {
            const response = await this.api.service.get(
                `/pokemon/${id}`,
            );
            return Promise.resolve(response.data);
        } catch (e) {
            const response: PokemonDetailModel = {}
            return Promise.reject(response);
        }
    }

}