export interface GlobalApiHandler<T>{
    status: string,
    message: string,
    data: T,
    timeStamp: Date,
    error: Array<any>
}