import { IComponent, IEntity, Store } from "./types";
export default function ComponentManager(store: Store): {
    add(component: IComponent, entity: IEntity): IComponent;
    remove(component: IComponent, entity: IEntity): IComponent;
};
