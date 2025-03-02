type Props = {
  buttonText: string;
  handleClick: React.MouseEventHandler;
};

function CalculateButton({ buttonText, handleClick }: Props) {
  return (
    <>
      <button
        className="w-full bg-black hover:bg-gray-600 text-white"
        type="button"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </>
  );
}

export default CalculateButton;
