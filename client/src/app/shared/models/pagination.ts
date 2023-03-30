import { IPost } from "./posts";

export interface IPagination{
    pageIndex: number;
    pageSize: number;
    count : number;
    data: IPost[];
}