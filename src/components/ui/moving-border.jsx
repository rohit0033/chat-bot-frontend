import React from "react";
import { cn } from "../../lib/utils";

export const MovingBorder = ({
  children,
  duration = "4s",
  className,
  borderClassName,
  as: Component = "div",
}) => {
  return (
    <Component
      className={cn(
        "relative rounded-lg p-[1px] overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg animate-border",
          "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500",
          "bg-[length:400%_100%]",
          borderClassName
        )}
        style={{
          animationDuration: duration,
        }}
      />
      <div className="relative rounded-lg bg-slate-900/90 p-4">
        {children}
      </div>
    </Component>
  );
};
