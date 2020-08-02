import { IComponent, IEntity, Store, IComponentID } from "./types";
export default function ComponentManager(store: Store): {
    add(component: IComponent, entity: IEntity): IComponent;
    remove(component: IComponent, entity: IEntity): IComponent;
    get(componentID: IComponentID, entity: IEntity): IComponent | undefined;
};
