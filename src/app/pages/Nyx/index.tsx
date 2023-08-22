import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Centered = ({children}: {children: React.ReactNode}) => (
  <Stack direction="row" justifyContent="center" sx={{width: '100%'}}>
    {children}
  </Stack>
);

export default function Nyx() {
  return (
    <Centered>
      <Stack direction="column" sx={{width: '1000px'}}>
        <Typography variant="h1">
          {`Section 1 – Ytterbian Languages`}
        </Typography>
        <Typography variant="body1">
          {`To begin the study of Nyx, first let’s overview the general properties of Ytterbian languages. The next section will then focus on the subset of these properties that apply to Nyx.`}
        </Typography>
        <Typography variant="h2">{`Ytterbian Physiology`}</Typography>
        <Typography variant="body1">
          {`Ytterbian physiology diverges markedly from that of humans, shaping their unique linguistic system. While they have an oral cavity and vocal cords like ours, their distinct structures enable them to generate sounds unfamiliar to human languages. Their trifurcated vocal cords allow for simultaneous multitonal production. Additionally, Ytterbians can emit aurorae, introducing a vast luminous communicative dimension. Possessing a sin-gular organ and cortex for both visual and auditory perception, all Ytterbians experience audiovisual synesthesia. Consequently, their languages often equate aurorae production with additional concurrent phonemes. An example in YPA (Ytterbian Photophonetic Alphabet) for "hello" in Nyx illustrates this complexity:`}
        </Typography>
        {/* <Centered></Centered> */}
      </Stack>
    </Centered>
  );
}
