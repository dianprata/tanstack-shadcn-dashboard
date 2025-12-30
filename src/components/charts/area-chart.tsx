import * as React from "react"
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { cn } from "@/lib/utils"

interface AreaChartProps {
  data: Array<Record<string, unknown>>
  dataKey: string
  xAxisKey: string
  className?: string
  height?: number
  gradientId?: string
  strokeColor?: string
  fillColor?: string
  showGrid?: boolean
  showTooltip?: boolean
}

export function AreaChart({
  data,
  dataKey,
  xAxisKey,
  className,
  height = 300,
  gradientId = "colorValue",
  strokeColor = "var(--chart-1)",
  fillColor = "var(--chart-1)",
  showGrid = true,
  showTooltip = true,
}: AreaChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={fillColor} stopOpacity={0.3} />
              <stop offset="95%" stopColor={fillColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--border)"
              vertical={false}
            />
          )}
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
            />
          )}
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={strokeColor}
            strokeWidth={2}
            fillOpacity={1}
            fill={`url(#${gradientId})`}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}
