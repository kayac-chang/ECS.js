export interface IComponent {
  name: string;
}

export type IEntity = Map<string, IComponent>;

export interface ISystem {
  filter: Set<string>;
  update: (delta: number, entities: IEntity[]) => void;
}
