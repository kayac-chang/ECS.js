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
        remove(componentID, entity) {
            groups[componentID] = groups[componentID].filter((item) => item !== entity);
            maps[entity] = maps[entity].filter(({ id }) => id !== componentID);
            return componentID;
        },
        get(componentID, entity) {
            return maps[entity].find(({ id }) => id === componentID);
        },
    };
}
