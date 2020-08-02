export default function SystemManager(store) {
    return {
        add(system) {
            store.systems.push(system);
            return system;
        },
        get(target) {
            return store.systems.find(({ id }) => id === target);
        },
        remove(target) {
            store.systems = store.systems.filter(({ id }) => id !== target);
            return target;
        },
    };
}
