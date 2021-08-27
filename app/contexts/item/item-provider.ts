import Api from "../../api/api";
import { ItemListModel } from "../../models/item-list-model";

export class ItemProvider {

    private api: Api = new Api();

    getItems = async (offset: number, limit: number): Promise<ItemListModel> => {
        try {
            const response = await this.api.service.get(
                '/item',
                {
                    params: {
                        offset: offset,
                        limit: limit
                    }
                }
            );
            return Promise.resolve(response.data);
        } catch (e) {
            const response: ItemListModel = {
                count: 0,
                next: undefined,
                previous: undefined,
                results: []
            }
            return Promise.reject(response);
        }
    }

}