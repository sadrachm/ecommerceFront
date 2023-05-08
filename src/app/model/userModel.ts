import {Product} from "../model/Product"
export interface userModel {
    username:String,
    password:String,
    id:number,
    products:Array<Product>
};