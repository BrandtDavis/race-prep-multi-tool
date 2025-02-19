type Props = {
    buttonText: string,
}

function CalculateButton({buttonText}: Props) {
    return (
        <>
            <button 
                className="w-full bg-black hover:bg-gray-600 text-white" 
                type="button">
                    {buttonText}
            </button>
        </>
    )
} 

export default CalculateButton
