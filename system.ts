import { ISystem } from './types';

export default function SystemManager(systems: Set<ISystem>) {
  return {
    get() {
      return systems;
    },

    add(system: ISystem) {
      return systems.add(system);
    },

    remove(system: ISystem) {
      return systems.delete(system);
    },
  };
}
