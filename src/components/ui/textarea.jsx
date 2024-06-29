import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-white/20  bg-[#19191d] px-4 py-2 text-base  placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-600 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 hover:border-orange-600 focus:border-orange-600",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
