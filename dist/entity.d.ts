import { IEntity, Store } from "./types";
export default function EntityManager(store: Store): {
    create(entity?: string): IEntity;
    get(target: string): string | undefined;
    remove(target: string): string;
};
