import {Status} from "./Status";


interface Todo<TData> {
    description: string;
    status: Status;
    assignee?: string;
    data: TData
}

export {Todo};