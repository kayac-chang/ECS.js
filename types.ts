export interface IComponent {
  name: string;
}

export interface IEntity extends Map<string, IComponent> {
  id: string;
}

export interface ISystem {
  filter: Set<string>;
  update: (delta: number, entities: IEntity[]) => void;
}
