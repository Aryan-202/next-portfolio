import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center space-y-8 px-4 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground sm:text-xl text-balance">
          The page you are looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
      </div>
      <Button asChild size="lg" className="px-8 font-medium">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
