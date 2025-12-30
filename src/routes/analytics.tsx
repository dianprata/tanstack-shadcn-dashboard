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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AreaChart } from "@/components/charts/area-chart"
import { BarChart } from "@/components/charts/bar-chart"
import { HugeiconsIcon } from "@hugeicons/react"
import { DownloadIcon, Calendar01Icon } from "@hugeicons/core-free-icons"

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
})

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 2000 },
  { name: "Apr", revenue: 2780 },
  { name: "May", revenue: 1890 },
  { name: "Jun", revenue: 2390 },
  { name: "Jul", revenue: 3490 },
  { name: "Aug", revenue: 4000 },
  { name: "Sep", revenue: 4500 },
  { name: "Oct", revenue: 5000 },
  { name: "Nov", revenue: 4800 },
  { name: "Dec", revenue: 5500 },
]

const trafficData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Organic", value: 300 },
  { name: "Referral", value: 200 },
]

const pageViewsData = [
  { name: "Mon", views: 2400 },
  { name: "Tue", views: 1398 },
  { name: "Wed", views: 9800 },
  { name: "Thu", views: 3908 },
  { name: "Fri", views: 4800 },
  { name: "Sat", views: 3800 },
  { name: "Sun", views: 4300 },
]

const deviceData = [
  { name: "Desktop", users: 58 },
  { name: "Mobile", users: 32 },
  { name: "Tablet", users: 10 },
]

const conversionData = [
  { name: "Week 1", rate: 2.1 },
  { name: "Week 2", rate: 2.4 },
  { name: "Week 3", rate: 2.8 },
  { name: "Week 4", rate: 3.2 },
]

function AnalyticsPage() {
  const [dateRange, setDateRange] = React.useState("30d")

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track your website performance and user engagement.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={(value) => value && setDateRange(value)}>
            <SelectTrigger className="w-40">
              <HugeiconsIcon icon={Calendar01Icon} className="mr-2 size-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <HugeiconsIcon icon={DownloadIcon} className="mr-2 size-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue for the current year</CardDescription>
        </CardHeader>
        <CardContent>
          <AreaChart
            data={revenueData}
            dataKey="revenue"
            xAxisKey="name"
            height={350}
            strokeColor="var(--chart-2)"
            fillColor="var(--chart-2)"
            gradientId="revenueGradient"
          />
        </CardContent>
      </Card>

      {/* Two Column Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={trafficData}
              dataKey="value"
              xAxisKey="name"
              height={250}
              barColor="var(--chart-3)"
              layout="vertical"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
            <CardDescription>Daily page views this week</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={pageViewsData}
              dataKey="views"
              xAxisKey="name"
              height={250}
              barColor="var(--chart-4)"
            />
          </CardContent>
        </Card>
      </div>

      {/* Three Column Charts */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Device Usage</CardTitle>
            <CardDescription>User distribution by device</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deviceData.map((device) => (
                <div key={device.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{device.name}</span>
                    <span className="font-medium">{device.users}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-chart-1 transition-all"
                      style={{ width: `${device.users}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
            <CardDescription>Weekly conversion trends</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaChart
              data={conversionData}
              dataKey="rate"
              xAxisKey="name"
              height={180}
              strokeColor="var(--chart-5)"
              fillColor="var(--chart-5)"
              gradientId="conversionGradient"
              showGrid={false}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Bounce Rate</span>
                <span className="font-medium">42.5%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Avg. Session</span>
                <span className="font-medium">3m 24s</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pages/Session</span>
                <span className="font-medium">4.2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">New Users</span>
                <span className="font-medium">68.3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

