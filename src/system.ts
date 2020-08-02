import { ISystem, Store, ISystemID } from "./types";

export default function SystemManager(store: Store) {
  return {
    add(system: ISystem) {
      store.systems.push(system);

      return system;
    },

    get(target: ISystemID) {
      return store.systems.find(({ id }) => id === target);
    },

    remove(target: ISystemID) {
      store.systems = store.systems.filter(({ id }) => id !== target);

      return target;
    },
  };
}
