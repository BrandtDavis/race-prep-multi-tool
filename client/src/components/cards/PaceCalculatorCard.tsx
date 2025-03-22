import NumericInput from "../inputs/numericInput";
import SelectInput from "../inputs/selectInput";
import CalculateButton from "../inputs/calculateButton";

import { useState } from "react";

function PaceCalculatorCard() {
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    const [paceUnits, setPaceUnits] = useState("");

    const handleClick = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      ) => {
        const response = await fetch(
          "http://localhost:5000/convert_pace?distance=10&pace=3:58&input_units=min/km&output_units=miles/hour",
        );
        const data = await response.json();
        console.log("data: ", data);
        console.log("event: ", event);
      };
    
    return (
        <div>
             <form method="" className="w-full">
                <div
                id="paceConverterForm"
                className="container grid w-full grid-cols-6 gap-12 px-4 py-5"
                >
                {/* Inputs */}
                <div className="col-span-2 mb-4">
                    <NumericInput
                    inputId="minutes"
                    fieldName="minutes"
                    fieldValue={minutes}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setMinutes(event.target.value)
                    }
                    labelValue="Minutes"
                    placeholder="Minutes"
                    />
                </div>

                <div className="col-span-2 mb-4">
                    <NumericInput
                    inputId="seconds"
                    fieldName="seconds"
                    fieldValue={seconds}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSeconds(event.target.value)
                    }
                    labelValue="Seconds"
                    placeholder="Seconds"
                    />
                </div>

                <div className="col-span-2 mb-4">
                    <SelectInput
                    inputId="paceUnitss"
                    fieldName="paceUnits"
                    fieldValue={paceUnits}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPaceUnits(event.target.value)
                    }
                    labelValue="Units"
                    choices={[
                        { value: "mins/km", text: "Mins/KM" },
                        { value: "mins/mile", text: "Mins/Mile" },
                    ]}
                    />
                </div>

                <div className="col-span-6 mb-4">
                    <CalculateButton
                    buttonText="Calculate"
                    handleClick={(
                        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
                    ) => handleClick(event)}
                    />
                </div>

                {/* Results Section */}
                </div>
            </form>
        </div>
    )
}

export default PaceCalculatorCard;