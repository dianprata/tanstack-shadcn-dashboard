import { Button } from "@/components/ui/button"

import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HugeiconsIcon } from "@hugeicons/react"
import { useRouterState } from "@tanstack/react-router"
import {
  SunIcon,
  MoonIcon,
  NotificationIcon,
  UserIcon,
  Settings01Icon,
  LogoutIcon,
} from "@hugeicons/core-free-icons"
import { Separator } from "@/components/ui/separator"

interface HeaderProps {
  isDarkMode: boolean
  onToggleDarkMode: () => void
}

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/analytics': 'Analytics',
  '/users': 'Users',
  '/settings': 'Settings',
}

export function Header({ isDarkMode, onToggleDarkMode }: HeaderProps) {
  const routerState = useRouterState()
  const pathname = routerState.location.pathname
  const title = pageTitles[pathname] || 'Dashboard'

  return (
    <header className="sticky bg-background top-0 z-50 flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {/* Left Section */}
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
        <h1 className="text-lg font-semibold">{title}</h1>

        {/* Right Actions */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleDarkMode}
            className="text-muted-foreground"
          >
            <HugeiconsIcon
              icon={isDarkMode ? SunIcon : MoonIcon}
              className="size-5"
            />
            <span className="sr-only">Toggle dark mode</span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="text-muted-foreground relative">
            <HugeiconsIcon icon={NotificationIcon} className="size-5" />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-destructive" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="icon" className="rounded-full" />
              }
            >
              <Avatar size="sm">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <HugeiconsIcon icon={UserIcon} className="mr-2 size-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HugeiconsIcon icon={Settings01Icon} className="mr-2 size-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <HugeiconsIcon icon={LogoutIcon} className="mr-2 size-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
