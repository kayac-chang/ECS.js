export default function SystemManager(systems) {
    function add(system) {
        systems.add(system);
        return systems.size;
    }
    function get(id) {
        return Array.from(systems).find((item) => item.id === id);
    }
    function remove(id) {
        const item = get(id);
        return item && systems.delete(item);
    }
    return { add, get, remove };
}
