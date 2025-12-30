import * as React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.ComponentProps<"div"> {
  size?: "sm" | "default" | "lg"
}

function Avatar({ className, size = "default", ...props }: AvatarProps) {
  return (
    <div
      data-slot="avatar"
      data-size={size}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        size === "sm" && "size-7",
        size === "default" && "size-9",
        size === "lg" && "size-12",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<"img">) {
  return (
    <img
      data-slot="avatar-image"
      src={src}
      alt={alt}
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted text-muted-foreground flex size-full items-center justify-center rounded-full text-xs font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
