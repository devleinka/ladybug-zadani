import './style.css';

export enum Direction {
  up = 'up',
  right = 'right',
  down = 'down',
  left = 'left'
}

export interface ILadybug
{
  posX: number;
  posY: number;
  orientation: Direction;
}

export const Ladybug : React.FC<ILadybug> = ({ posX, posY, orientation }) => {
  return (
    <div
      className={`ladybug ladybug--${orientation}`}
      style={{
        top: `${posX}px`,
        left: `${posY}px`,
      }}
    />
  );
};

export default Ladybug;