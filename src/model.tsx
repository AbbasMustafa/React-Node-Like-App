// Define an interface 'LikeProps' with three properties
export default interface LikeProps {
  onClick: (curState: number) => void;
  size?: number;
  isLikeApi: number;
}

// Define an interface 'CardProps' with three properties
export interface CardProps {
  id: number;
  name: string;
  isLike: number;
}

// Define an interface 'apiCard' with three properties
export interface apiCard {
  id: number;
  name: string;
  isLike: number;
}
