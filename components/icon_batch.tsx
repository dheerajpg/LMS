import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva(
  "sm rounded-full flex items-center justify-center",
  {
    variants:
    {
      variant: {
        default: "bg-slate-100",
        success: "bg-emerald-100"
      },
      size:
      {
        default: "p-2",
        sm: "p-1"
      }
    },
    defaultVariants:
    {
      variant: "default",
      size: "default"
    }
  }
);
const iconVariants = cva(
  "",
  {
    variants:
    {
      variant: {
        default: "text-indigo-700",
        success: "text-emerald-700"
      },
      size:
      {
        default: "w-8 h-8",
        sm: "w-4 h-4"
      }
    },
    defaultVariants:
    {
      variant: "default",
      size: "default"
    }
  }
)

type backgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type iconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBatchProps extends backgroundVariantsProps, iconVariantsProps {
  icon: LucideIcon;
}

export const IconBatch = ({
  icon: Icon,
  variant,
  size
}: IconBatchProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))} />
    </div>
  )
}