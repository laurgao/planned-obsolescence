import React from "react";

const Loading = ({ loading }: { loading: boolean }) => {
    return loading ? (
        <div className="h-screen w-screen flex items-center justify-center text-center">
            <p className="text-2xl">Loading...</p>
        </div>
    ) : (
        <></>
    );
};

export default Loading;
