import NumericInput from "../components/inputs/numericInput";
import SelectInput from "../components/inputs/selectInput";
import CalculateButton from "../components/inputs/calculateButton";
import { useState } from "react";

function PaceConverterPage() {
  const [distance, setDistance] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [distancePerHourUnits, setDistancePerHourUnits] = useState("");
  const [minutesPerDistanceUnit, setMinutesPerDistanceUnit] = useState("");

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
    <div className="mx-auto">
      <div className="mx-auto w-3/4 bg-gray-300 rounded overflow-hidden shadow-lg flex flex-wrap">
        <div className="px-6 py-4">
          <div className="text-gray-700 text-basefont-bold text-xl mb-2">
            Treadmill Pace Converter
          </div>
          <hr className="border-gray-600 mt-2"></hr>

          <form method="" className="w-full">
            <div
              id="paceConverterForm"
              className="container grid w-full grid-cols-6 gap-12 px-4 py-5"
            >
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
                  inputId="distancePerHourUnits"
                  fieldName="distancePerHourUnits"
                  fieldValue={distancePerHourUnits}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setDistancePerHourUnits(event.target.value)
                  }
                  labelValue="Units"
                  choices={[
                    { value: "km/hour", text: "KM/Hour" },
                    { value: "miles/hour", text: "Miles/Hour" },
                  ]}
                />
              </div>

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
                  inputId="minutesPerDistanceUnits"
                  fieldName="minutesPerDistanceUnit"
                  fieldValue={minutesPerDistanceUnit}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setMinutesPerDistanceUnit(event.target.value)
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaceConverterPage;
