type ButtonProps = {                      //This defines a TypeScript type for the props your CounterButton component will accept.
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}

const CounterButton = ({onClick, disabled = false, label, addClasses = ""}: ButtonProps) => {
    return (
        <>
            <button
                className={`bg-cf-dark-gray text-white py-2 px-4 ` + addClasses}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </button>
        </>
    )
}
export default CounterButton;