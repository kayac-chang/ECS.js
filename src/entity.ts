import { IEntity } from "./types";
import { v4 as uuid } from "uuid";

export default function EntityManager(entities: Set<IEntity>) {
  function create(id = uuid()): IEntity {
    const entity: IEntity = Object.assign(new Map(), { id });

    entities.add(entity);

    return entity;
  }

  function get(id: string) {
    return Array.from(entities).find((entity) => entity.id === id);
  }

  function remove(id: string) {
    const entity = get(id);

    return entity && entities.delete(entity);
  }

  return {
    create,
    get,
    remove,
  };
}
