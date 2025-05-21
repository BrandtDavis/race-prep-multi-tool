import SubmitButton from "../components/inputs/SubmitButton";
import NumericInput from "../components/inputs/numericInput";
import SelectInput from "../components/inputs/selectInput";
import TextInput from "../components/inputs/TextInput";
import DateInput from "../components/inputs/DateInput"

import { useState } from "react";

function CreateActivityPage() {
  const [activityName, setActivityName] = useState("")
  const [activityDate, setActivityDate] = useState("")
  const [activityType, setActivityType] = useState("")
  const [activityDistance, setActivityDistance] = useState("")
  const [activityUnits, setActivityUnits] = useState("")
  
  const createNewActivity = async () => {
    const response = await fetch(
      'http://localhost:5000/create_new_activity',
    { 
        method: 'POST',
        headers: {
            Accept: 'application/form-data',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          activity_name: activityName,
          activity_date: activityDate,
          activity_type: activityType,
          distance: activityDistance, 
          units: activityUnits,
        })
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  };

  return ( 
  <form className="w-full">
    <div className="min pt-15 h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
      <div className="max-w-[500px] rounded-3xl border bg-gray-300 p-8 mx-10 shadow-xl space-y-5">
        <div className="container grid w-full grid-cols-6 gap-6 px-4 py-2">
          <h2 className="col-span-6 text-2xl font-bold">Add Activity</h2>
            
            <div className="col-span-6 mb-2">
              <TextInput 
                inputId="activityName"
                fieldName="activityName"
                fieldValue={activityName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setActivityName(event.target.value)
                }
                labelValue="Activity Name"
                placeholder="Activity Name"
              />
            </div>

            <div className="col-span-6 mb-2">
              <DateInput 
                inputId="activityDate"
                fieldName="activityDate"
                fieldValue={activityDate}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setActivityDate(event.target.value)
                }
                labelValue="Activity Date"
                placeholder="Activity Date"
              />
            </div>

            <div className="col-span-6 mb-2">
              <SelectInput 
                inputId="activityType"
                fieldName="activityType"
                fieldValue={activityType}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setActivityType(event.target.value)
                }
                labelValue="Activity Type"
                choices={[
                  { value: "road_run", text: "Road Run" },
                  { value: "trail_run", text: "Trail Run" },
                  { value: "race", text: "Race" },
                  { value: "treadmill_run", text: "Treadmill Run" },
                ]}
              />
            </div>

            <div className="col-span-6 mb-2">
              <NumericInput
                inputId="activityDistance"
                fieldName="activityDistance"
                fieldValue={activityDistance}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setActivityDistance(event.target.value)
                }
                labelValue="Distance"
                placeholder="Distance"
              />
            </div>

            <div className="col-span-6 mb-2">
              <SelectInput
                inputId="activityUnits"
                fieldName="activityUnits"
                fieldValue={activityUnits}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setActivityUnits(event.target.value)
                }
                labelValue="Units"
                choices={[
                    { value: "km", text: "KM" },
                    { value: "mile", text: "Miles" },
                ]}
              />
            </div>

            <div className="col-span-6 mb-4">
              <SubmitButton
                buttonText="Add New Activity"
                handleClick={() =>{createNewActivity()}}
              />
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}

export default CreateActivityPage;
