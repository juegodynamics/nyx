import {Body, Subsubsection} from 'app/pages/Nyx/Text';
import {YtterbianAnatomy} from './YtterbianAnatomy';
import {Centered} from 'app/pages/Nyx/Layout';

export function Nyx1ai() {
  return (
    <>
      <Subsubsection>{`Anatomical Review`}</Subsubsection>
      <Body>{`The primary structures involved in language production are as follows:`}</Body>
      <Centered>
        <YtterbianAnatomy />
      </Centered>
    </>
  );
}
