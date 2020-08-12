declare function update(delta: number): void;
declare const _default: {
    entity: {
        create(entity?: string): string;
        query(component: string): string[];
        remove(target: string): string;
    };
    component: {
        add(component: import("./types").IComponent, entity: string): import("./types").IComponent;
        remove(componentID: string, entity: string): string;
        get(componentID: string, entity: string): import("./types").IComponent | undefined;
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
