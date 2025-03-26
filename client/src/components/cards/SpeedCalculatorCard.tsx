import NumericInput from "../inputs/numericInput";
import SelectInput from "../inputs/selectInput";
import CalculateButton from "../inputs/calculateButton";

import { useState } from "react";


function SpeedCalculatorCard() {
    const [speed, setspeed] = useState("");
    const [speedUnits, setSpeedUnits] = useState("");
    const [paceUnits, setPaceUnits] = useState("");

    const [pace, setPace] = useState("");

    const handleClick = async () => {
        const response = await fetch(
            'http://localhost:5000/convert_speed?' + new URLSearchParams({
                speed: speed,
                input_units: speedUnits,
                output_units: paceUnits,
            }), 
        {
            method: 'GET',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        setPace(data.result)
      };
    
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
                        inputId="speed"
                        fieldName="speed"
                        fieldValue={speed}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setspeed(event.target.value)
                        }
                        labelValue="Speed"
                        placeholder="Speed"
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
                    inputId="paceUnits"
                    fieldName="paceUnits"
                    fieldValue={paceUnits}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPaceUnits(event.target.value)
                    }
                    labelValue="Units"
                    choices={[
                        { value: "min/km", text: "Min/KM" },
                        { value: "min/mile", text: "Min/Mile" },
                    ]}
                    />
                </div>

                <div className="col-span-6 mb-4">
                    <CalculateButton
                            buttonText="Calculate"
                            handleClick={() => handleClick()}
                    />
                </div>
                    <h2 className="col-span-1 text-xl font-bold"> Result: </h2>
                    <span className="col-span-2 ml-2 my-auto"> {speed || null} {speedUnits || null} </span>
                    <span className="my-auto"> {pace === "" ? null : "is"} </span>
                    <span className="col-span-2 ml-2 my-auto"> {pace || null} </span>
            </div>
        </form>
        {/* Results Section */}
        <div>
            
        </div>
    </div>
  )
}

export default SpeedCalculatorCard;
