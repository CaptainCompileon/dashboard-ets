import 'src/global.css';
import 'rsuite/dist/rsuite.min.css';
import 'src/custom-rsuite.css';
import { PaletteMode } from '@mui/material';
import React, { createContext } from 'react';
import { CustomProvider } from 'rsuite';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

// ----------------------------------------------------------------------
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
export default function App() {
  useScrollToTop();
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider mode={mode}>
        <CustomProvider theme={mode}>
          <Router />
        </CustomProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
