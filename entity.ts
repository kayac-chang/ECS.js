import { IEntity, IComponent } from './types';

export default function EntityManager(entities: Set<IEntity>) {
  return {
    create(id: string): IEntity {
      const entity = Object.assign(new Map<string, IComponent>(), { id });

      entities.add(entity);

      return entity;
    },
  };
}
