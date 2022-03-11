import { Asset } from "../models/assets";

export const getAssetsFromResponse = (data:any) => {
    const response:Asset[] = data.map((value:any) =>({         
        id: value.id,       
        title: value.symbol,
        subtitle: value.name,
        value: value.priceUsd,
        currency: "USD",
        movement: Number(value.changePercent24Hr) >= 0?true:false,
        percentage: value.changePercent24Hr,
        supply: value.supply,
        maxSupply: value.maxSupply,
        marketCap: value.marketCapUsd
    }));
    return response;
}

export const getDetailedAssetFromResponse = (data:any) =>({         
    id: data.id,       
    title: data.symbol,
    subtitle: data.name,
    value: data.priceUsd,
    currency: "USD",
    movement: Number(data.changePercent24Hr) >= 0?true:false,
    percentage: data.changePercent24Hr,
    supply: data.supply,
    maxSupply: data.maxSupply,
    marketCap: data.marketCapUsd
});