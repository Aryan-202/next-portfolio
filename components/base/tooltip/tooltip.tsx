"use client";

import type { ReactNode } from "react";
import { cx } from "@/lib/utils/cx";

interface TooltipProps {
    title: ReactNode;
    description?: ReactNode;
    children: ReactNode;
    arrow?: boolean;
    delay?: number;
    closeDelay?: number;
    trigger?: string;
    isDisabled?: boolean;
    isOpen?: boolean;
    defaultOpen?: boolean;
    offset?: number;
    crossOffset?: number;
    placement?: string;
    onOpenChange?: (isOpen: boolean) => void;
}


export const Tooltip = ({
    title,
    description,
    children,
    arrow = false,
    delay = 300,
    closeDelay = 0,
    trigger,
    isDisabled,
    isOpen,
    defaultOpen,
    offset = 6,
    crossOffset,
    placement = "top",
    onOpenChange,
    ...tooltipProps
}: TooltipProps) => {
    return (
        <div className="group relative inline-block">
            {children}
            {!isDisabled && (
                <div
                    className={cx(
                        "absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200",
                        "flex flex-col items-start gap-1 rounded-lg bg-[#0c0c0c] border border-white/10 px-3 py-2 shadow-xl",
                        placement === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
                        placement === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
                    )}
                >
                    <span className="text-xs font-semibold text-white whitespace-nowrap">{title}</span>
                    {description && <span className="text-[10px] font-medium text-white/60">{description}</span>}
                </div>
            )}
        </div>
    );
};

export const TooltipTrigger = ({ children, className, ...buttonProps }: any) => {
    return (
        <div {...buttonProps} className={cx("h-max w-max outline-hidden", className)}>
            {children}
        </div>
    );
};
