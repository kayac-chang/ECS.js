export interface Store {
    entities: IEntity[];
    componentGroup: Record<IComponentID, IComponent[]>;
    entityCompoentsMap: Record<IEntity, IComponentID[]>;
    systems: ISystem[];
}
export declare type IEntity = string;
export declare type IComponentID = string;
export declare type ISystemID = string;
export interface IComponent {
    id: IComponentID;
    owner?: IEntity;
}
export interface ISystem {
    id: ISystemID;
    filter: IComponentID[];
    update: (delta: number, group: Record<IComponentID, IComponent[]>) => void;
}
