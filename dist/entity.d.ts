import { IEntity, Store, IComponentID } from "./types";
export default function EntityManager(store: Store): {
    create(entity?: string): IEntity;
    query(component: IComponentID): IEntity[];
    has(entity: IEntity): string | undefined;
    remove(target: IEntity): string;
};
