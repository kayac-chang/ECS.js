import { IEntity, ISystem } from "./types";
declare function update(delta: number): void;
declare const _default: {
    entity: {
        create: (id?: string) => IEntity;
        get: (id: string) => IEntity | undefined;
        remove: (id: string) => boolean | undefined;
    };
    component: {
        add: (component: import("./types").IComponent, entity: IEntity) => IEntity;
        remove: (component: import("./types").IComponent, entity: IEntity) => boolean;
    };
    system: {
        add: (system: ISystem) => number;
        get: (id: string) => ISystem | undefined;
        remove: (id: string) => boolean | undefined;
    };
    update: typeof update;
};
export default _default;
export * from "./types";
