export interface Store {
    entities: IEntity[];
    componentGroup: Record<IComponentID, IEntity[]>;
    entityCompoentsMap: Record<IEntity, IComponent[]>;
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
    update: (delta: number, entities: IEntity[]) => void;
}
