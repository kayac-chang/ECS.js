import { IComponent, IEntity, Store, IComponentID } from "./types";
export default function ComponentManager(store: Store): {
    has(componentID: IComponentID, entity: IEntity): boolean;
    add(component: IComponent, entity: IEntity): IComponent;
    remove(componentID: IComponentID, entity: IEntity): string;
    get(componentID: IComponentID, entity: IEntity): IComponent | undefined;
};
