import * as React from "react";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative flex min-h-screen flex-col bg-background">
        <main className="flex-1">
          <div className="container relative p-10 md:flex md:items-center md:h-full md:flex-col">
            <section className="flex flex-grow flex-shrink-0 basis-auto flex-col justify-center items-center mx-auto overflow-auto md">
              <ModeToggle />
              <Dashboard />
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
