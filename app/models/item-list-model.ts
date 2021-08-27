// To parse this data:
//
//   import { Convert, ItemListModel } from "./file";
//
//   const itemListModel = Convert.toItemListModel(json);

export interface ItemListModel {
    count?:    number;
    next?:     string;
    previous?: null;
    results?:  Result[];
}

export interface Result {
    name?: string;
    url?:  string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toItemListModel(json: string): ItemListModel {
        return JSON.parse(json);
    }

    public static itemListModelToJson(value: ItemListModel): string {
        return JSON.stringify(value);
    }
}
