import NumericInput from "../inputs/numericInput";
import SelectInput from "../inputs/selectInput";
import CalculateButton from "../inputs/calculateButton";

import { useState } from "react";


function SpeedCalculatorCard() {
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

    const [distance, setDistance] = useState("");
  
    const [speedUnits, setSpeedUnits] = useState("");
    
  return (
    <div>
        {/* Inputs */}
        <div className="col-span-4 mb-4">
            <NumericInput
                inputId="distance"
                fieldName="distance"
                fieldValue={distance}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setDistance(event.target.value)
                }
                labelValue="Distance"
                placeholder="Distance"
            />
        </div>

        <div className="col-span-2 mb-4">
                <SelectInput
                  inputId="speedUnits"
                  fieldName="speedUnits"
                  fieldValue={speedUnits}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSpeedUnits(event.target.value)
                  }
                  labelValue="Units"
                  choices={[
                    { value: "km/hour", text: "KM/Hour" },
                    { value: "miles/hour", text: "Miles/Hour" },
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
  )
}

export default SpeedCalculatorCard;