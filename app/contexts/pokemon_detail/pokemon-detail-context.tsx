import React from "react";
import { PokemonDetailModel } from "../../models/pokemon-detail-model";
import { PokemonDetailProvider } from "./pokemon-detail-provider";

export type PokemonDetailContextType = {
    pokemonDetail: PokemonDetailModel;
    loading: boolean;
    getPokemonDetail: (id: number) => void;
}

export const PokemonDetailContext = React.createContext<PokemonDetailContextType | null>(null);

export const PokemonDetailContextProvider: React.FC<React.ReactNode> = ({children}) => {

    const pokemonDetailProvider: PokemonDetailProvider = new PokemonDetailProvider();
    const [pokemonDetail, setPokemonDetail] = React.useState<PokemonDetailModel>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const getPokemonDetail = async (id: number) => {
        setLoading(true);

        const response = await pokemonDetailProvider.getPokemonDetail(id);
        if (response) {
            setPokemonDetail(response);
        }

        setLoading(false);
    }

    return (
        <PokemonDetailContext.Provider value={{
            pokemonDetail,
            loading,
            getPokemonDetail
        }}>
            {children}
        </PokemonDetailContext.Provider>
    );
}