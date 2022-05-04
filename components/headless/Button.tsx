import Link from "next/link";

export type ButtonProps = (React.HTMLProps<HTMLButtonElement> | React.HTMLProps<HTMLAnchorElement>)
    & {isLoading?: boolean, containerClassName?: string, childClassName?: string,};

export default function Button(props: ButtonProps) {
    const {href, isLoading, children, containerClassName, disabled} = props;
    let domProps = {...props};
    delete domProps.containerClassName;
    delete domProps.childClassName;

    return (
        <div className={`relative inline-block ${containerClassName || ""} ${disabled ? "opacity-25 cursor-not-allowed" : ""} ${props.childClassName || ""}`}>
            {href ? (
                <Link href={href}>
                    {/* @ts-ignore */}
                    <a {...domProps}>
                        <div className={isLoading ? "invisible" : ""}>
                            {children}
                        </div>
                    </a>
                </Link>
            ) : (
                // @ts-ignore
                <button {...domProps}>
                    <div className={(isLoading ? "invisible " : "") + (disabled ? "cursor-not-allowed " : "") + (props.childClassName || "")}>
                        {children}
                    </div>
                </button>
            )}
            {isLoading && <div className="up-spinner"/>}
        </div>
    )
}