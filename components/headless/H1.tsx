export default function H1(props: React.HTMLProps<HTMLHeadingElement>) {
    let newProps = {...props};
    delete newProps.className;

    return (
        <h1
            className={"font-bold text-3xl " + props.className}
            {...newProps}
        >
            {props.children}
        </h1>
    );
}