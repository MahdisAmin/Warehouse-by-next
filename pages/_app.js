import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
