import Api from "../../api/api";
import { ItemDetailModel } from "../../models/item-detail-model";

export class ItemDetailProvider {

    private api: Api = new Api();

    getItemDetail = async (id: number): Promise<ItemDetailModel> => {
        try {
            const response = await this.api.service.get(
                `/item/${id}`,
            );
            return Promise.resolve(response.data);
        } catch (e) {
            const response: ItemDetailModel = {}
            return Promise.reject(response);
        }
    }

}