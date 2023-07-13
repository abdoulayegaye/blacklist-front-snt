import {Injectable} from "@angular/core";

@Injectable()
export class StorageService{
  put(key:string,value:string){
    localStorage.setItem(key,value);
  }

  value<T>(key:string,isJson=false){
    const value: string | null = localStorage.getItem(key);
    return  (isJson ? JSON.parse(value || "{}"): value) as T;
  }

  clear(){
    localStorage.clear();
  }
}
