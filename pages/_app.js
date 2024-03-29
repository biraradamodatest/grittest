import '../styles/globals.css'
import Layout from '../components/Layout'


import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
const clientSideEmotionCache = createEmotionCache();
export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {

  return <CacheProvider value={emotionCache}>
<ThemeProvider theme={theme}>
<Layout >
  <Component {...pageProps} />
  </Layout> 
</ThemeProvider>
</CacheProvider>
}
