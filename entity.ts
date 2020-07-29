import { IEntity, IComponent } from './types';

export default function EntityManager(entities: Set<IEntity>) {
  return {
    create(): IEntity {
      const entity = new Map<string, IComponent>();

      entities.add(entity);

      return entity;
    },
  };
}
