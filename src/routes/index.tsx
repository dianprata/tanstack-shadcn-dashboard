import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"

// Removed Sidebar imports




import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AreaChart } from "@/components/charts/area-chart"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  UserGroupIcon,
  ChartIncreaseIcon,
  ShoppingCart01Icon,
  AnalyticsUpIcon,
  ArrowUpRightIcon,
  ArrowDownLeftIcon,
  MoreHorizontalCircle01Icon,
} from "@hugeicons/core-free-icons"

export const Route = createFileRoute("/")({
  component: DashboardPage,
})

// Stat card data
const stats = [
  {
    title: "Total Users",
    value: "12,486",
    change: "+12.5%",
    trend: "up" as const,
    icon: UserGroupIcon,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Revenue",
    value: "$48,295",
    change: "+8.2%",
    trend: "up" as const,
    icon: ChartIncreaseIcon,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Orders",
    value: "2,845",
    change: "-3.1%",
    trend: "down" as const,
    icon: ShoppingCart01Icon,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Active Users",
    value: "1,249",
    change: "+18.7%",
    trend: "up" as const,
    icon: AnalyticsUpIcon,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
]

// Visitors data for chart
const visitorsData = [
  { name: "Jan", visitors: 4000 },
  { name: "Feb", visitors: 3000 },
  { name: "Mar", visitors: 5000 },
  { name: "Apr", visitors: 4500 },
  { name: "May", visitors: 6000 },
  { name: "Jun", visitors: 5500 },
  { name: "Jul", visitors: 7000 },
  { name: "Aug", visitors: 6500 },
  { name: "Sep", visitors: 8000 },
  { name: "Oct", visitors: 7500 },
  { name: "Nov", visitors: 9000 },
  { name: "Dec", visitors: 8500 },
]

// Recent orders data
const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$250.00",
    status: "Completed",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$150.00",
    status: "Pending",
  },
  {
    id: "ORD-003",
    customer: "Bob Wilson",
    email: "bob@example.com",
    amount: "$350.00",
    status: "Completed",
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    email: "alice@example.com",
    amount: "$450.00",
    status: "Processing",
  },
  {
    id: "ORD-005",
    customer: "Charlie Davis",
    email: "charlie@example.com",
    amount: "$200.00",
    status: "Completed",
  },
]

function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div
                  className={`flex size-10 items-center justify-center rounded-lg ${stat.bgColor}`}
                >
                  <HugeiconsIcon
                    icon={stat.icon}
                    className={`size-5 ${stat.color}`}
                  />
                </div>
                <Badge
                  variant={stat.trend === "up" ? "default" : "outline"}
                  className={
                    stat.trend === "up"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                  }
                >
                  <HugeiconsIcon
                    icon={stat.trend === "up" ? ArrowUpRightIcon : ArrowDownLeftIcon}
                    className="mr-1 size-3"
                  />
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Visitors Chart */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Visitors Overview</CardTitle>
              <CardDescription>
                Monthly visitors for the current year
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon">
              <HugeiconsIcon icon={MoreHorizontalCircle01Icon} className="size-5" />
            </Button>
          </CardHeader>
          <CardContent>
            <AreaChart
              data={visitorsData}
              dataKey="visitors"
              xAxisKey="name"
              height={300}
            />
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {order.customer}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {order.email}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{order.amount}</p>
                    <Badge
                      variant="outline"
                      className={
                        order.status === "Completed"
                          ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
                          : order.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
                            : "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                      }
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

