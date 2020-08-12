import { v4 as uuid } from "uuid";
export default function EntityManager(store) {
    return {
        create(entity = uuid()) {
            store.entities.push(entity);
            return entity;
        },
        query(component) {
            return store.componentGroup[component];
        },
        remove(target) {
            store.entities = store.entities.filter((entity) => entity !== target);
            store.entityCompoentsMap[target].forEach(({ id }) => {
                store.componentGroup[id] = store.componentGroup[id].filter((entity) => entity !== target);
            });
            delete store.entityCompoentsMap[target];
            return target;
        },
    };
}
