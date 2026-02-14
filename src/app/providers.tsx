"use client";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "@/lib/store";
import { ThemeProvider } from "./ThemeProvider";
import * as Tooltip from "@radix-ui/react-tooltip";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Tooltip.Provider delayDuration={300}>
            {children}
          </Tooltip.Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
