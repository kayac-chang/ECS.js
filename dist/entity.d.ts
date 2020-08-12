import { IEntity, Store, IComponentID } from "./types";
export default function EntityManager(store: Store): {
    create(entity?: string): IEntity;
    query(component: IComponentID): IEntity[];
    remove(target: string): string;
};
