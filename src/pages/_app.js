import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';


function App({ Component, pageProps }) {
  console.log(pageProps);
  return(
    <ThemeProvider defaultTheme='light' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;