import 'intl';
import "intl/locale-data/jsonp/en";

export const getFormattedMoney = (value:string)=>{
    return new Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"USD"
    }).format(Number(value)).substring(1);
}

export const getFormattedPercentage = (value:string)=>{
    let result = Number(value);
    if(result < 0){
        result = result * -1;
    }
    result = Math.round((result + Number.EPSILON) * 100) / 100;

    return result.toFixed(2);
}