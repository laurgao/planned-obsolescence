import React from "react";

const Loading = ({ loading }: { loading: boolean }) => {
    return loading ? <div className="bg-yellow-600">Loading...</div> : <></>;
};

export default Loading;
