import EntityManager from "./entity";
import SystemManager from "./system";
import ComponentManager from "./component";
const store = {
    entities: [],
    componentGroup: {},
    entityCompoentsMap: {},
    systems: [],
};
function update(delta) {
    const { systems, componentGroup } = store;
    systems.forEach(({ filter, update }) => {
        const components = filter.reduce((config, component) => Object.assign(config, { [component]: componentGroup[component] }), {});
        update(delta, components);
    });
}
export default {
    entity: EntityManager(store),
    component: ComponentManager(store),
    system: SystemManager(store),
    update,
};
export * from "./types";
