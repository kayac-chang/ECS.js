import { IComponent } from "./types";
declare function update(delta: number): void;
declare const _default: {
    entity: {
        create(entity?: string): string;
        get(target: string): string | undefined;
        remove(target: string): string;
    };
    component: {
        add(component: IComponent, entity: string): IComponent;
        remove(component: IComponent, entity: string): IComponent;
    };
    system: {
        add(system: import("./types").ISystem): import("./types").ISystem;
        get(target: string): import("./types").ISystem | undefined;
        remove(target: string): string;
    };
    update: typeof update;
};
export default _default;
export * from "./types";
