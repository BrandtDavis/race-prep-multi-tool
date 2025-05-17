type props = {
  inputId: string;
  fieldName: string;
  fieldValue: string;
  onChange: React.ChangeEventHandler;
  labelValue: string;
  placeholder: string;
};

function NumericInput({
  inputId,
  fieldName,
  fieldValue,
  onChange,
  labelValue,
  placeholder
}: props) {
  return (
    <>
      <label
        className="flex text-gray-700 text-sm font-bold mb-2"
        htmlFor={inputId}
      >
        {labelValue}
      </label>

      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        id={inputId}
        name={fieldName}
        onChange={onChange}
        value={fieldValue}
        placeholder={placeholder}
      />
    </>
  );
}

export default NumericInput;
