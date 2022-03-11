import { Asset } from "../models/assets";
import axiosInstance from "../index";
import { SetStateAction } from "react";
import { NavigationContainerRef } from "@react-navigation/native";
import { getAssetsFromResponse, getDetailedAssetFromResponse } from "../dto/assets";

type GetAssetsProps = {
    setAssets:(a:SetStateAction<Asset[] | null>)=>void,
    setLoading: (l:boolean)=>void
    navigator: NavigationContainerRef|null
}

type GetDetailedAssetProps = {
    idAsset: string
    setDetailedAsset: (a:Asset)=>void
    setLoading:(l:boolean)=>void
    navigator:NavigationContainerRef|null
}

export const getAssetsService = ({setAssets, setLoading, navigator}:GetAssetsProps) => {
    return new Promise((resolve, reject)=>{
        axiosInstance.get("/assets").then(({data}) => {                       
            setAssets(getAssetsFromResponse(data.data));
            setLoading(false);
        }).catch(error =>{
            console.log(error?.response?.status);
            navigator?.navigate("Error");
            reject(error);
        })
    });
}

export const getAssetByIDService = ({idAsset, setDetailedAsset, setLoading, navigator}:GetDetailedAssetProps) => {
    return new Promise((resolve, reject)=>{
        axiosInstance.get(`/assets/${idAsset}`).then(({data}) => {                    
            setDetailedAsset(getDetailedAssetFromResponse(data.data));
            setLoading(false);
        }).catch(error =>{
            console.log(error?.response?.status);
            navigator?.navigate("Error");
            reject(error);
        })
    });
}