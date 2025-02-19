type props = {
    inputId: string,
    labelValue: string,
    placeholder: string,
}

function NumericInput({inputId, labelValue, placeholder}: props) {
    return (
        <>
            <label className="flex text-gray-700 text-sm font-bold mb-2" htmlFor="distance">
                {labelValue}
            </label>

            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id={inputId} 
                type="text" 
                placeholder={placeholder} 
            />
        </>
    )
} 

export default NumericInput
