import { IComponent, IEntity } from './types';

function add(componet: IComponent, entity: IEntity) {
  return entity.set(componet.name, componet);
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
