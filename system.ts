import { System } from './types';

export default function SystemManager(systems: Set<System>) {
  return {
    get() {
      return systems;
    },

    add(system: System) {
      return systems.add(system);
    },

    remove(system: System) {
      return systems.delete(system);
    },
  };
}
