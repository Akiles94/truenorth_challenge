import { createContext, SetStateAction } from "react"
import { Asset, defaultAsset } from "../../api/models/assets"

type DataContext = {
    username: string
    setUsername: (u:string)=>void
    password: string
    setPassword: (p:string)=>void
    loading: boolean
    setLoading: (l:boolean)=>void
    assets: Asset[]|null
    setAssets: (a:SetStateAction<Asset[] | null>)=>void,
    detailedAsset: Asset
    setDetailedAsset: (d:Asset)=>void
}

export const defaultData: DataContext = {
    username:"",
    setUsername:(u:string)=>{},
    password:"",
    setPassword:(p:string)=>{},
    loading:false,
    setLoading:(l:boolean)=>{},
    assets: null,
    setAssets: (a:SetStateAction<Asset[] | null>)=>{},
    detailedAsset: defaultAsset,
    setDetailedAsset: (d:Asset)=>{}
}

const DataContext = createContext<DataContext>(defaultData);

export default DataContext;