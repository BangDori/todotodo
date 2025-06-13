import type { PropsWithChildren } from "react";
import { RootHeader } from "../header/RootHeader";

export function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto w-full max-w-xl py-8">
      <RootHeader />
      {children}
    </main>
  );
}
