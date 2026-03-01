import React from "react";

const Loading = () => {
    return (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center space-y-4">
            <div className="relative h-12 w-12">
                <div className="animate-spin absolute inset-0 rounded-full border-2 border-t-foreground/20 border-r-foreground/20 border-b-foreground/20 border-l-foreground h-12 w-12"></div>
            </div>
            <p className="text-muted-foreground animate-pulse text-sm font-medium tracking-tight">
                Loading...
            </p>
        </div>
    );
};

export default Loading;
