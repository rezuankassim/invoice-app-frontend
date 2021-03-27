import Layout from "@/components/Layout";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
