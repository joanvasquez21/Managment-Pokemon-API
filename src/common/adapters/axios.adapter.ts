import { Injectable } from "@nestjs/common";
import { HttpAdaper } from "../interface/http-adapter.interface";
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdaper{

    private  axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
        
        try{
        const { data } = await this.axios.get<T>(url);
        return data;

        }catch(error){
        throw new Error('This is a error - Check log');
        }

    }

}