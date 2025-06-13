import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OverlayProvider } from "overlay-kit";
import "./styles/globals.css";
import { App } from "./App.tsx";
import { RootErrorBoundary } from "./components/error-boundary";
import { QueryProvider } from "./queries/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootErrorBoundary>
      <QueryProvider>
        <OverlayProvider>
          <App />
        </OverlayProvider>
      </QueryProvider>
    </RootErrorBoundary>
  </StrictMode>
);
