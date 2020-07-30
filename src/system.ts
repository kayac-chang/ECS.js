import { ISystem } from "./types";

export default function SystemManager(systems: Set<ISystem>) {
  function add(system: ISystem) {
    systems.add(system);

    return systems.size;
  }

  function get(id: string) {
    return Array.from(systems).find((item) => item.id === id);
  }

  function remove(id: string) {
    const item = get(id);

    return item && systems.delete(item);
  }

  return { add, get, remove };
}
