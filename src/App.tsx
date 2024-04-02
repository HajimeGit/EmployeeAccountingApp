import * as React from "react";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col h-screen justify-center items-center max-w-3xl mx-auto">
        <ModeToggle />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}
