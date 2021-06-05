export default function H2(props: React.HTMLProps<HTMLHeadingElement>) {
    let newProps = {...props};
    delete newProps.className;

    return (
        <h2
            className={"text-xl font-bold " + props.className}
            {...newProps}
        >
            {props.children}
        </h2>
    );
}