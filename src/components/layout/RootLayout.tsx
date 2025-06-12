import type { PropsWithChildren } from "react";

export function RootLayout({ children }: PropsWithChildren) {
  return <main className="mx-auto w-full max-w-xl py-8">{children}</main>;
}
