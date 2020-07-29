import EntityManager from './entity';
import ComponentManager from './component';
import SystemManager from './system';
import { IEntity, ISystem } from './types';
import { memo } from './utils';

const entities: Set<IEntity> = new Set();
const systems: Set<ISystem> = new Set();

function getEntitiesByComponentNames(entities: IEntity[], filter: string[]) {
  return entities.filter((entity) => filter.every((name) => entity.has(name)));
}

const findEntitiesBy =
  //
  memo((entities: Set<IEntity>) =>
    memo((filter: Set<string>) =>
      //
      getEntitiesByComponentNames(Array.from(entities), Array.from(filter))
    )
  );

function update(delta: number) {
  const find = findEntitiesBy(entities);

  systems.forEach(({ filter, update }) => update(delta, find(filter)));
}

export default {
  entity: EntityManager(entities),
  component: ComponentManager(),
  system: SystemManager(systems),
  update,
};

export * from './types';
