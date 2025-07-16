import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "text-black font-bold font-matahari w-fit px-4 md:px-6 md:pt-4 md:pb-3 pt-3 pb-2 font-matahari md:text-[25px] text-[16px] text-white  border-[1px] border-white  rounded-full hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out  hover:shadow-lg"     
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className,  asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
