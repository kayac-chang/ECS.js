import { v4 as uuid } from "uuid";
export default function EntityManager(entities) {
    function create(id = uuid()) {
        const entity = Object.assign(new Map(), { id });
        entities.add(entity);
        return entity;
    }
    function get(id) {
        return Array.from(entities).find((entity) => entity.id === id);
    }
    function remove(id) {
        const entity = get(id);
        return entity && entities.delete(entity);
    }
    return {
        create,
        get,
        remove,
    };
}
