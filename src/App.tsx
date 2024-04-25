import { useState } from 'react';
import Ladybug, { ILadybug } from './components/Ladybug';
import { Direction } from './components/Ladybug';

const STEP_SIZE = 25;


export const App: React.FC = () => {
  // const [posX, setPosX] = useState<number>(100);
  // const [posY, setPosY] = useState<number>(100);
  // const [orientation, setOrientation] = useState<Direction>(Direction.right);

  const [bugDirections, setBugDirections] = useState<ILadybug>({posX: 100, posY: 100, orientation: Direction.right})

  const handleKeyUp = ({ code }:React.KeyboardEvent<HTMLDivElement>) => {
    if (code === 'ArrowUp') {
      setBugDirections({...bugDirections, orientation: Direction.up, posX: bugDirections.posX - STEP_SIZE })
      // setOrientation(Direction.up);
      // setPosX(posX - STEP_SIZE);
    } else if (code === 'ArrowLeft') {
      setBugDirections({...bugDirections, orientation: Direction.left, posY: bugDirections.posY - STEP_SIZE })
      // setOrientation(Direction.left);
      // setPosY(posY - STEP_SIZE);
    } else if (code === 'ArrowRight') {
      setBugDirections({...bugDirections, orientation: Direction.right, posY: bugDirections.posY + STEP_SIZE })
      // setOrientation(Direction.right);
      // setPosY(posY + STEP_SIZE);
    } else if (code === 'ArrowDown') {
      setBugDirections({...bugDirections, orientation: Direction.down, posX: bugDirections.posX + STEP_SIZE })
      // setOrientation(Direction.down);
      // setPosX(posX + STEP_SIZE);
    }
  };

  return (
    <div
      tabIndex={-1}
      className="field"
      onKeyDown={handleKeyUp}
    >
      <header>Click anywhere to start the game</header>
      <Ladybug posX={bugDirections.posX} posY={bugDirections.posY} orientation={bugDirections.orientation} />
    </div>
  );
};

export default App;
