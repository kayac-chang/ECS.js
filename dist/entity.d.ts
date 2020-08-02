import { IEntity, Store } from "./types";
export default function EntityManager(store: Store): {
    create(entity?: string): IEntity;
    remove(target: string): string;
};
