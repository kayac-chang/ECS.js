import { Entity, Component } from './types';

export default function EntityManager(entities: Set<Entity>) {
  return {
    create(): Entity {
      const entity = new Map<string, Component>();

      entities.add(entity);

      return entity;
    },

    get() {
      return entities;
    },
  };
}
