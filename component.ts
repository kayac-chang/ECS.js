import { IComponent, IEntity } from './types';

function add(component: IComponent, entity: IEntity) {
  return entity.set(component.name, component);
}

function remove(component: IComponent, entity: IEntity) {
  return entity.delete(component.name);
}

export default function ComponentManager() {
  return {
    add,
    remove,
  };
}
