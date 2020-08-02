import { ISystem, Store, ISystemID } from "./types";
export default function SystemManager(store: Store): {
    add(system: ISystem): ISystem;
    get(target: ISystemID): ISystem | undefined;
    remove(target: ISystemID): string;
};
