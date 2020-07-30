function add(component, entity) {
    return entity.set(component.id, component);
}
function remove(component, entity) {
    return entity.delete(component.id);
}
export default function ComponentManager() {
    return {
        add,
        remove,
    };
}
