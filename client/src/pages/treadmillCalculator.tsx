import '../App.css'
import NumericInput from '../components/inputs/numericInput'
import SelectInput from '../components/inputs/selectInput'
import CalculateButton from '../components/inputs/calculateButton'

function TreadmillCalculator() {
  
    // const [data, setData] = useState('')
  
    // const fetchApi = async () => {
    //   const response = await axios.get('http://localhost:5000/hello')
    //   console.log(response.data)
    //   setData(response.data.user)
    // }
  
    // useEffect(() => {
    //   fetchApi()
    // }, [])
  
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
                        <CalculateButton buttonText="Calculate" />
                    </div>
                </div>
            </form>    

          </div>
        </div>
      </>
    )
  }
  
  export default TreadmillCalculator
