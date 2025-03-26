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
        <form method="" className="w-full">
            <div
              id="speedConverterForm"
              className="container grid w-full grid-cols-6 gap-6 px-4 py-2"
            >
                <h2 className="col-span-6 text-2xl font-bold">From</h2>
                {/* Inputs */}
                <div className="col-span-4 mb-2">
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

                <div className="col-span-2 mb-2">
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

                <hr className="col-span-6"/>

                <h2 className="col-span-6 text-2xl font-bold">To</h2>
                <div className="col-span-6 mb-2">
                    <SelectInput
                    inputId="speedUnits"
                    fieldName="speedUnits"
                    fieldValue={speedUnits}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSpeedUnits(event.target.value)
                    }
                    labelValue="Units"
                    choices={[
                        { value: "kph", text: "KM/Hour" },
                        { value: "mph", text: "Miles/Hour" },
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
                    <h2 className="col-span-1 text-xl font-bold"> Result: </h2>
                    <span className="col-span-2 ml-2 my-auto">4:00 Min/km</span>
                    <span className="my-auto"> is </span>
                    <span className="col-span-2 ml-2 my-auto">4:00 Min/km</span>
            </div>
        </form>
        {/* Results Section */}
        <div>
            
        </div>
    </div>
  )
}

export default SpeedCalculatorCard;