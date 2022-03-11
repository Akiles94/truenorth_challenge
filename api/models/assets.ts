export type Asset = {
    id: string
    title: string
    subtitle: string
    value: string
    currency: string
    movement: boolean
    percentage: string
    supply: string
    maxSupply: string
    marketCap: string
}

export const defaultAsset:Asset = {
    id: "",
    title: "",
    subtitle: "",
    value: "",
    currency: "",
    movement: false,
    percentage: "",
    supply: "",
    maxSupply: "",
    marketCap: ""
}