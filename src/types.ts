interface HasID {
  id: string;
}

export interface IComponent extends HasID {}

export interface IEntity extends Map<string, IComponent>, HasID {}

export interface ISystem extends HasID {
  filter: Set<string>;
  update: (delta: number, entities: IEntity[]) => void;
}
