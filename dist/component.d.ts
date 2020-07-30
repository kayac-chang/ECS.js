import { IComponent, IEntity } from "./types";
declare function add(component: IComponent, entity: IEntity): IEntity;
declare function remove(component: IComponent, entity: IEntity): boolean;
export default function ComponentManager(): {
    add: typeof add;
    remove: typeof remove;
};
export {};
