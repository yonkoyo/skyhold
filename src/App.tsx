import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Outfit, sans-serif',
        headings: { fontFamily: 'Outfit, sans-serif' },
      }}
    ></MantineProvider>
  );
}

export default App;
