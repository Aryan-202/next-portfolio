"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Error = ({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[80vh] w-full flex-col items-center justify-center space-y-8 px-4 text-center">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    Something went wrong
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground sm:text-xl">
                    We apologize for the inconvenience. An unexpected error occurred while
                    processing your request.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                    onClick={() => reset()}
                    size="lg"
                    className="px-8 font-medium"
                >
                    Try again
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => (window.location.href = "/")}
                    className="px-8 font-medium"
                >
                    Go home
                </Button>
            </div>
        </div>
    );
};

export default Error;
