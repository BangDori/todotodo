import type { PropsWithChildren } from "react";

export function RootLayout({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-xl py-8">{children}</div>;
}
