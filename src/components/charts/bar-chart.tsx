import * as React from "react"
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { cn } from "@/lib/utils"

interface BarChartProps {
  data: Array<Record<string, unknown>>
  dataKey: string
  xAxisKey: string
  className?: string
  height?: number
  barColor?: string
  showGrid?: boolean
  showTooltip?: boolean
  barRadius?: number
  layout?: "horizontal" | "vertical"
}

export function BarChart({
  data,
  dataKey,
  xAxisKey,
  className,
  height = 300,
  barColor = "var(--chart-1)",
  showGrid = true,
  showTooltip = true,
  barRadius = 4,
  layout = "horizontal",
}: BarChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout={layout}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              vertical={layout === "horizontal" ? false : true}
              horizontal={layout === "horizontal" ? true : false}
            />
          )}
          {layout === "horizontal" ? (
            <>
              <XAxis
                dataKey={xAxisKey}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              />
            </>
          ) : (
            <>
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              />
              <YAxis
                dataKey={xAxisKey}
                type="category"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                width={80}
              />
            </>
          )}
          {showTooltip && (
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--popover)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              labelStyle={{ color: "var(--popover-foreground)" }}
              itemStyle={{ color: "var(--popover-foreground)" }}
              cursor={{ fill: "var(--muted)", opacity: 0.5 }}
            />
          )}
          <Bar
            dataKey={dataKey}
            fill={barColor}
            radius={[barRadius, barRadius, barRadius, barRadius]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
