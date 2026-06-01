import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AuthProvider } from "@/lib/auth";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-romance px-4">
      <div className="max-w-md text-center glass rounded-3xl p-10">
        <h1 className="font-script text-6xl text-rose glow-text">Lost ❤️</h1>
        <p className="mt-4 text-muted-foreground">This page is not part of our story.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 rounded-full bg-rose-grad font-display tracking-wider uppercase text-sm hover:scale-105 transition-transform">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-romance px-4">
      <div className="max-w-md text-center glass rounded-3xl p-10">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="px-5 py-2.5 rounded-full bg-rose-grad text-sm font-display tracking-wider uppercase"
          >
            Try again
          </button>
          <a href="/" className="px-5 py-2.5 rounded-full border border-primary text-sm font-display tracking-wider uppercase">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "A Special Place For My Princess ❤️" },
      { name: "description", content: "A romantic birthday journey through our memories, our moments, and our love." },
      { name: "author", content: "For My Princess" },
      { property: "og:title", content: "A Special Place For My Princess ❤️" },
      { property: "og:description", content: "A romantic birthday journey through our love story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </QueryClientProvider>
  );
}
