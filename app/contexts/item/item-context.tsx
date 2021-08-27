import React from "react";
import { ItemListModel, Result } from "../../models/item-list-model";
import { ItemProvider } from "./item-provider";

export type ItemContextType = {
    items: Result[];
    loading: boolean;
    loadMore: boolean;
    offset: number;
    limit: number;
    getItems: (isLoadMore: boolean) => void;
    itemLoadMore: () => void
}

export const ItemContext = React.createContext<ItemContextType | null>(null);

export const ItemContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const itemProvider: ItemProvider = new ItemProvider();
    const [items, setItems] = React.useState<Result[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [loadMore, setLoadMore] = React.useState<boolean>(false);
    const [offset, setOffset] = React.useState<number>(0);
    const [limit, setLimit] = React.useState<number>(20);

    React.useEffect(() => {
        getItems(false);
    }, [])

    React.useEffect(() => {
        if (loadMore) getItems(true);
    }, [offset, loadMore]);

    const getItems = async (
        isLoadMore: boolean
    ) => {
        if (isLoadMore) setLoadMore(true);
        else setLoading(true);

        const response = await itemProvider.getItems(offset, limit);
        if (response.results != undefined) {
            if (response.results.length > 0) {
                setItems(value => {
                    return [...value, ...response.results!];
                });
            }
        }

        if (isLoadMore) setLoadMore(false);
        else setLoading(false);
    }
    
    const itemLoadMore = () => {
        setOffset(offset + 20);
        setLoadMore(true);
    }

    return(
        <ItemContext.Provider value={{
            items,
            loading,
            offset,
            limit,
            loadMore,
            getItems,
            itemLoadMore
        }}>
          {children}
        </ItemContext.Provider>
    )
}