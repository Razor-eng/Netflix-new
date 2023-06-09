import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

import '../styles/globals.css';

export default function App({
  Component,
  pageProps: {
    session,
    ...pageProps
  }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

{/* <Head>
                <title>Netflix - {variant === 'login' ? 'Login' : 'SignUp'}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}