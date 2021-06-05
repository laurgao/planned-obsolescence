export default function H3(props: React.HTMLProps<HTMLHeadingElement>) {
    let newProps = {...props};
    delete newProps.className;

    return (
        <h3
            className={"font-bold " + props.className}
            {...newProps}
        >
            {props.children}
        </h3>
    );
}