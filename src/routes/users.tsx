import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SearchIcon,
  PlusSignIcon,
  MoreVerticalCircle01Icon,
  Edit01Icon,
  Delete01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"

export const Route = createFileRoute("/users")({
  component: UsersPage,
})

// Users data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    joined: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    joined: "Feb 20, 2024",
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob.wilson@example.com",
    role: "Viewer",
    status: "Inactive",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
    joined: "Mar 10, 2024",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    role: "Editor",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    joined: "Apr 05, 2024",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    role: "Viewer",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie",
    joined: "May 18, 2024",
  },
  {
    id: 6,
    name: "Diana Evans",
    email: "diana.evans@example.com",
    role: "Admin",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana",
    joined: "Jun 22, 2024",
  },
  {
    id: 7,
    name: "Edward Foster",
    email: "edward.foster@example.com",
    role: "Viewer",
    status: "Pending",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Edward",
    joined: "Jul 30, 2024",
  },
  {
    id: 8,
    name: "Fiona Green",
    email: "fiona.green@example.com",
    role: "Editor",
    status: "Active",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fiona",
    joined: "Aug 12, 2024",
  },
]

function UsersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage your team members and their permissions.
          </p>
        </div>
        <Button>
          <HugeiconsIcon icon={PlusSignIcon} className="mr-2 size-4" />
          Add User
        </Button>
      </div>

      {/* Users Table Card */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                A list of all users including their name, email, role, and status.
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <HugeiconsIcon
                icon={SearchIcon}
                className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="search"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">User</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Role</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Joined</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="group">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <Avatar size="sm">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge
                        variant="outline"
                        className={
                          user.role === "Admin"
                            ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
                            : user.role === "Editor"
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                              : "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20"
                        }
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <Badge
                        variant="outline"
                        className={
                          user.status === "Active"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                            : user.status === "Inactive"
                              ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                              : "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{user.joined}</td>
                    <td className="py-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          }
                        >
                          <HugeiconsIcon icon={MoreVerticalCircle01Icon} className="size-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <HugeiconsIcon icon={UserIcon} className="mr-2 size-4" />
                            View Profile
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <HugeiconsIcon icon={Edit01Icon} className="mr-2 size-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive focus:text-destructive">
                            <HugeiconsIcon icon={Delete01Icon} className="mr-2 size-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>

      </Card>
    </div>
  )
}

