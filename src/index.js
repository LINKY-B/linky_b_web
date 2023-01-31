import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store/store";
import App from "./App";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
);
