import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';

export default function Main({children}: {children: React.ReactNode}) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{width: '100%', overflowY: 'auto', overflowX: 'visible'}}
    >
      <Stack
        component="main"
        sx={{
          width: '1200px',
          height: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Stack>
    </Stack>
  );
}
