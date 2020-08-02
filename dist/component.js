export default function ComponentManager(store) {
    const groups = store.componentGroup;
    const maps = store.entityCompoentsMap;
    return {
        add(component, entity) {
            component.owner = entity;
            groups[component.id] = [...(groups[component.id] || []), entity];
            maps[entity] = [...(maps[entity] || []), component];
            return component;
        },
        remove(component, entity) {
            groups[component.id] = groups[component.id].filter((item) => item !== entity);
            maps[entity] = maps[entity].filter(({ id }) => id !== component.id);
            return component;
        },
        get(componentID, entity) {
            return maps[entity].find(({ id }) => id === componentID);
        },
    };
}
