import { IComponent, IEntity, Store, IComponentID } from "./types";
export default function ComponentManager(store: Store): {
    add(component: IComponent, entity: IEntity): IComponent;
    remove(componentID: IComponentID, entity: IEntity): string;
    get(componentID: IComponentID, entity: IEntity): IComponent | undefined;
};
