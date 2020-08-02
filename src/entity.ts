import { IEntity, Store } from "./types";
import { v4 as uuid } from "uuid";

export default function EntityManager(store: Store) {
  return {
    create(entity = uuid()): IEntity {
      store.entities.push(entity);

      return entity;
    },

    get(target: string) {
      return store.entities.find((entity) => entity === target);
    },

    remove(target: string) {
      store.entities = store.entities.filter((entity) => entity !== target);

      store.entityCompoentsMap[target].forEach((componentID) => {
        store.componentGroup[componentID] = store.componentGroup[
          componentID
        ].filter(({ owner }) => owner !== target);
      });

      delete store.entityCompoentsMap[target];

      return target;
    },
  };
}
