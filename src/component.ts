import { IComponent, IEntity } from "./types";

function add(component: IComponent, entity: IEntity) {
  return entity.set(component.id, component);
}

function remove(component: IComponent, entity: IEntity) {
  return entity.delete(component.id);
}

export default function ComponentManager() {
  return {
    add,
    remove,
  };
}
