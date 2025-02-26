import '../App.css'
import NumericInput from '../components/inputs/numericInput'
import SelectInput from '../components/inputs/selectInput'
import CalculateButton from '../components/inputs/calculateButton'
import axios from 'axios'
// import { useEffect } from 'react'

function TreadmillCalculator() {
  
    const handleClick = async() => {
      const response = axios.get('http://localhost:5000/convert_pace?distance=10&pace=3:58&input_units=min/km&output_units=miles/hour')
      response.then((res) => {
          console.log("response:", res)
      })
    }
  
    return (
      <>
        <div className="mx-auto w-3/4 bg-gray-300 rounded overflow-hidden shadow-lg flex flex-wrap">
          <div className="px-6 py-4">

            <div className="text-gray-700 text-basefont-bold text-xl mb-2">Treadmill Pace Converter</div>
            <hr className="border-gray-600 mt-2"></hr>

            <form 
                method=""
                className="w-full"
            >
                <div 
                    id="paceConverterForm"
                    className="container grid w-full grid-cols-6 gap-12 px-4 py-5"
                >

                    <div className="col-span-4 mb-4">
                        <NumericInput inputId='distance' labelValue='Distance' placeholder='Distance' />
                    </div>

                    <div className="col-span-2 mb-4">
                        <SelectInput 
                            inputId='distancePerHourUnits' 
                            labelValue='Units' 
                            choices={[{value: "km/hour", text: "KM/Hour"}, {value: "miles/hour", text: "Miles/Hour"}]}
                        />
                    </div>

                    <div className="col-span-2 mb-4">
                        <NumericInput inputId='pace' labelValue='Minutes' placeholder='Minutes' />
                    </div>

                    <div className="col-span-2 mb-4">
                        <NumericInput inputId='seconds' labelValue='Seconds' placeholder='Seconds' />
                    </div>

                    <div className="col-span-2 mb-4">
                        <SelectInput 
                            inputId='minutesPerDistanceUnits' 
                            labelValue='Units' 
                            choices={[{value: "mins/km", text: "Mins/KM"}, {value: "mins/mile", text: "Mins/Mile"}]}
                        />
                    </div>

                    <div className="col-span-6 mb-4">
                        <CalculateButton buttonText="Calculate" handleClick={() => handleClick()}/>
                    </div>
                </div>
            </form>    

          </div>
        </div>
      </>
    )
  }
  
  export default TreadmillCalculator
