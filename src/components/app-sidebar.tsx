
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Home01Icon,
  AnalyticsUpIcon,
  UserGroupIcon,
  Settings01Icon,
  Layers01Icon,
  FileIcon,
  Calendar01Icon,
  HelpCircleIcon,
  SparklesIcon,
  CheckmarkBadge01Icon,
  CreditCardIcon,
  Notification01Icon,
  MoreVerticalIcon,
  SearchIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link, useLocation } from "@tanstack/react-router"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/",
    icon: Home01Icon,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: AnalyticsUpIcon,
  },
  {
    title: "Users",
    url: "/users",
    icon: UserGroupIcon,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: Layers01Icon,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: FileIcon,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar01Icon,
  },
]

const user = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}

const bottomItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings01Icon,
  },
  {
    title: "Help",
    url: "/help",
    icon: HelpCircleIcon,
  },
]

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const { state, isMobile } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={
              <Link to="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <HugeiconsIcon icon={Layers01Icon} className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Dashboard</span>
                  <span className="text-xs text-muted-foreground">v1.0.0</span>
                </div>
              </Link>
            } />
          </SidebarMenuItem>
        </SidebarMenu>
        {state === "expanded" ? (
          <div className="px-2 pb-2">
            <InputGroup className="bg-sidebar-accent/50 border-sidebar-border focus-within:ring-sidebar-ring ring-offset-sidebar">
              <InputGroupAddon align="inline-start" className="pointer-events-none">
                <HugeiconsIcon icon={SearchIcon} className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                type="search"
                placeholder="Search..."
                className="focus-visible:ring-0"
              />
            </InputGroup>
          </div>
        ) : (
          <div className="px-2 pb-2 flex justify-center">
            <Tooltip>
              <TooltipTrigger render={
                <button className="flex items-center justify-center rounded-lg p-2 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring">
                  <HugeiconsIcon icon={SearchIcon} className="size-5" />
                </button>
              } />
              <TooltipContent side="right">Search</TooltipContent>
            </Tooltip>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={isActive} tooltip={item.title} render={
                      <Link to={item.url}>
                        <HugeiconsIcon icon={item.icon} />
                        <span>{item.title}</span>
                      </Link>
                    } />
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => {
                const isActive = location.pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={isActive} tooltip={item.title} render={
                      <Link to={item.url}>
                        <HugeiconsIcon icon={item.icon} />
                        <span>{item.title}</span>
                      </Link>
                    } />
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger render={
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">
                      {user.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                  </div>
                  <HugeiconsIcon icon={MoreVerticalIcon} className="ml-auto size-4" />
                </SidebarMenuButton>
              } />
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? 'bottom' : 'right'}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">
                        {user.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.name}</span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <HugeiconsIcon icon={SparklesIcon} />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <HugeiconsIcon icon={CheckmarkBadge01Icon} />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HugeiconsIcon icon={CreditCardIcon} />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HugeiconsIcon icon={Notification01Icon} />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* <LogOut /> */}
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar >
  )
}
