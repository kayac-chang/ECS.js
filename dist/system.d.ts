import { ISystem } from "./types";
export default function SystemManager(systems: Set<ISystem>): {
    add: (system: ISystem) => number;
    get: (id: string) => ISystem | undefined;
    remove: (id: string) => boolean | undefined;
};
