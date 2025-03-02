type Props = {
  inputId: string;
  fieldName: string;
  fieldValue: string;
  onChange: React.ChangeEventHandler;
  labelValue: string;
  choices: Choice[];
};

type Choice = {
  value: string;
  text: string;
};

function SelectInput({
  inputId,
  fieldName,
  fieldValue,
  onChange,
  labelValue,
  choices,
}: Props) {
  return (
    <>
      <label
        className="flex text-gray-700 text-sm font-bold mb-2"
        htmlFor="distance"
      >
        {labelValue}
      </label>

      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={inputId}
        name={fieldName}
        value={fieldValue}
        onChange={onChange}
      >
        <option value="" defaultValue="Please select a unit"></option>
        {choices.map((choice: Choice) => {
          return (
            <option key={choice.value} value={choice.value}>
              {choice.text}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default SelectInput;
