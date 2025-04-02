import NumericInput from "../inputs/numericInput";
import SelectInput from "../inputs/selectInput";
import CalculateButton from "../inputs/calculateButton";

import { useState } from "react";

function PaceCalculatorCard() {
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    const [paceUnits, setPaceUnits] = useState("");
    const [speedUnits, setSpeedUnits] = useState("");

    const [speed, setSpeed] = useState("");

    const handleClick = async () => {
        const response = await fetch(
          'http://localhost:5000/convert_pace?' + new URLSearchParams({
                pace: `${minutes}:${seconds}`,
                input_units: paceUnits,
                output_units: speedUnits,
            }),
        { 
            method: 'GET',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        setSpeed(data.result)
    };
    
    return (
        <div>

             <form method="" className="w-full">
                <div
                    id="paceConverterForm"
                    className="container grid w-full grid-cols-6 gap-6 px-4 py-2"
                >
                <h2 className="col-span-6 text-2xl font-bold">From</h2>

                {/* Inputs */}
                <div className="col-span-2 mb-2">
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

                <div className="col-span-2 mb-2">
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

                <div className="col-span-2 mb-2">
                    <SelectInput
                    inputId="paceUnits"
                    fieldName="paceUnits"
                    fieldValue={paceUnits}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPaceUnits(event.target.value)
                    }
                    labelValue="Units"
                    choices={[
                        { value: "min/km", text: "Mins/KM" },
                        { value: "min/mile", text: "Mins/Mile" },
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
                        { value: "km/hour", text: "KM/Hour" },
                        { value: "miles/hour", text: "Miles/Hour" },
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
                    <span className="col-span-2 ml-2 my-auto"> {minutes || null}:{seconds || null} {paceUnits || null} </span>
                    <span className="my-auto"> {speed === "" ? null : "is"} </span>
                    <span className="col-span-2 ml-2 my-auto"> {speed.split('.')[0] || null} {speed != "" ? speedUnits : null}</span>
                </div>
            </form>
        </div>
    )
}

export default PaceCalculatorCard;