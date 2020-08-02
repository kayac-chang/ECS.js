export interface Store {
  entities: IEntity[];
  componentGroup: Record<IComponentID, IEntity[]>;
  entityCompoentsMap: Record<IEntity, IComponent[]>;
  systems: ISystem[];
}

export type IEntity = string;
export type IComponentID = string;
export type ISystemID = string;

export interface IComponent {
  id: IComponentID;
  owner?: IEntity;
}

export interface ISystem {
  id: ISystemID;
  filter: IComponentID[];
  update: (delta: number, entities: IEntity[]) => void;
}
