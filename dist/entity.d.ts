import { IEntity } from "./types";
export default function EntityManager(entities: Set<IEntity>): {
    create: (id?: string) => IEntity;
    get: (id: string) => IEntity | undefined;
    remove: (id: string) => boolean | undefined;
};
