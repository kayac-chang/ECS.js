export default function ComponentManager(store) {
    const groups = store.componentGroup;
    const maps = store.entityCompoentsMap;
    return {
        has(componentID, entity) {
            var _a;
            return (_a = maps[entity]) === null || _a === void 0 ? void 0 : _a.some(({ id }) => id === componentID);
        },
        add(component, entity) {
            if (this.has(component.id, entity)) {
                throw new Error(`duplicate component found in this entity.`);
            }
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
