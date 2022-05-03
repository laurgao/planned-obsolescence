import Link from "next/link";

export type ButtonProps = (React.HTMLProps<HTMLButtonElement> | React.HTMLProps<HTMLAnchorElement>) & {
    containerClassName?: string;
    childClassName?: string;
};

export default function Button(props: ButtonProps) {
    const { href, className, children, containerClassName, disabled } = props;
    let domProps = { ...props };
    delete domProps.className;
    delete domProps.childClassName;

    return href ? (
        <Link href={href}>
            {/* @ts-ignore */}
            <a {...domProps} className={`relative inline-block ${className || ""} ${disabled ? "opacity-25 cursor-not-allowed" : ""}`}>
                <div className={props.childClassName || ""}>{children}</div>
            </a>
        </Link>
    ) : (
        // @ts-ignore
        <button {...domProps} className={`relative inline-block ${className || ""} ${disabled ? "opacity-25 cursor-not-allowed" : ""}`}>
            <div className={(disabled ? "cursor-not-allowed " : "") + (props.childClassName || "")}>{children}</div>
        </button>
    );
}
