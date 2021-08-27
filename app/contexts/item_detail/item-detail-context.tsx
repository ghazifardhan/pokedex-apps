import React from "react";
import { ItemDetailModel } from "../../models/item-detail-model";
import { ItemDetailProvider } from "./item-detail-provider";

export type ItemDetailContextType = {
    itemDetail: ItemDetailModel;
    loading: boolean;
    getItemDetail: (id: number) => void;
}

export const ItemDetailContext = React.createContext<ItemDetailContextType | null>(null);

export const ItemDetailContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const itemDetailProvider: ItemDetailProvider = new ItemDetailProvider();
    const [itemDetail, setItemDetail] = React.useState<ItemDetailModel>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const getItemDetail = async (id: number) => {
        setLoading(true);

        const response = await itemDetailProvider.getItemDetail(id);
        if (response) {
            setItemDetail(response);
        }

        setLoading(false);
    }

    return (
        <ItemDetailContext.Provider value={{
            itemDetail,
            loading,
            getItemDetail
        }}>
            {children}
        </ItemDetailContext.Provider>
    );
}