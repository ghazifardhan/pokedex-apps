import React from "react";
import { PokemonListModel, Result } from "../../models/pokemon-list-model";
import { PokemonProvider } from "./pokemon-provider";

export type PokemonContextType = {
    pokemons: Result[];
    loading: boolean;
    loadMore: boolean;
    offset: number;
    limit: number;
    getPokemons: (isLoadMore: boolean) => void;
    pokemonLoadMore: () => void
}

export const PokemonContext = React.createContext<PokemonContextType | null>(null);

export const PokemonContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const pokemonProvider: PokemonProvider = new PokemonProvider();
    const [pokemons, setPokemons] = React.useState<Result[]>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [loadMore, setLoadMore] = React.useState<boolean>(false);
    const [offset, setOffset] = React.useState<number>(0);
    const [limit, setLimit] = React.useState<number>(20);

    React.useEffect(() => {
        getPokemons(false);
    }, [])

    React.useEffect(() => {
        if (loadMore) getPokemons(true);
    }, [offset, loadMore]);

    const getPokemons = async (
        isLoadMore: boolean
    ) => {
        if (isLoadMore) setLoadMore(true);
        else setLoading(true);

        const response = await pokemonProvider.getPokemons(offset, limit);
        if (response.results != undefined) {
            if (response.results.length > 0) {
                setPokemons(value => {
                    return [...value, ...response.results!];
                });
            }
        }

        if (isLoadMore) setLoadMore(false);
        else setLoading(false);
    }
    
    const pokemonLoadMore = () => {
        setOffset(offset + 20);
        setLoadMore(true);
    }

    return(
        <PokemonContext.Provider value={{
            pokemons,
            loading,
            offset,
            limit,
            loadMore,
            getPokemons,
            pokemonLoadMore
        }}>
          {children}
        </PokemonContext.Provider>
    )
}