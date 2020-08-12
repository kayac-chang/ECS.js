import { IEntity, Store, IComponentID } from "./types";
import { v4 as uuid } from "uuid";

export default function EntityManager(store: Store) {
  return {
    create(entity = uuid()): IEntity {
      store.entities.push(entity);

      return entity;
    },

    query(component: IComponentID): IEntity[] {
      return store.componentGroup[component];
    },

    remove(target: string) {
      store.entities = store.entities.filter((entity) => entity !== target);

      store.entityCompoentsMap[target].forEach(({ id }) => {
        store.componentGroup[id] = store.componentGroup[id].filter(
          (entity) => entity !== target
        );
      });

      delete store.entityCompoentsMap[target];

      return target;
    },
  };
}
