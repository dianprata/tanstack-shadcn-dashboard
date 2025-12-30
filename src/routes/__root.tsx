import { createRootRoute, Outlet, Link } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { HugeiconsIcon } from '@hugeicons/react'
import { Home01Icon, ArrowLeft01Icon } from '@hugeicons/core-free-icons'

import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

import * as React from 'react'
import { Header } from '@/components/layout/header'
import { TooltipProvider } from "@/components/ui/tooltip"

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

function RootComponent() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  // Sync dark mode state with document class after hydration
  React.useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev
      document.documentElement.classList.toggle("dark", newValue)
      return newValue
    })
  }

  return (
    <TooltipProvider>
      <SidebarProvider style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
          <div className="flex flex-1 flex-col">
            <main className="flex-1 p-4 md:p-6">
              <Outlet />
            </main>
          </div>
        </SidebarInset>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </SidebarProvider>
    </TooltipProvider>
  )
}


function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <span className="text-[150px] font-bold leading-none text-muted-foreground/20 select-none">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Page Not Found
        </h1>
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <HugeiconsIcon icon={Home01Icon} className="size-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}


