import EntityManager from "./entity";
import SystemManager from "./system";
import ComponentManager from "./component";
import { memo } from "./utils";
const entities = new Set();
const systems = new Set();
function getEntitiesByComponentNames(entities, filter) {
    return entities.filter((entity) => filter.every((name) => entity.has(name)));
}
const findEntitiesBy = memo((entities) => memo((filter) => getEntitiesByComponentNames(Array.from(entities), Array.from(filter))));
function update(delta) {
    const find = findEntitiesBy(entities);
    systems.forEach(({ filter, update }) => update(delta, find(filter)));
}
export default {
    entity: EntityManager(entities),
    component: ComponentManager(),
    system: SystemManager(systems),
    update,
};
export * from "./types";
