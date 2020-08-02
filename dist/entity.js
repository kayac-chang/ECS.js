import { v4 as uuid } from "uuid";
export default function EntityManager(store) {
    return {
        create(entity = uuid()) {
            store.entities.push(entity);
            return entity;
        },
        get(target) {
            return store.entities.find((entity) => entity === target);
        },
        remove(target) {
            store.entities = store.entities.filter((entity) => entity !== target);
            store.entityCompoentsMap[target].forEach((componentID) => {
                store.componentGroup[componentID] = store.componentGroup[componentID].filter(({ owner }) => owner !== target);
            });
            delete store.entityCompoentsMap[target];
            return target;
        },
    };
}
