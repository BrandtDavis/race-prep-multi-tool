import TextInput from "../components/inputs/TextInput";
import { useEffect, useState } from "react";

const getUserData = async () => {
  const response = await fetch(
    'http://localhost:5000/get_user_data?' + new URLSearchParams({
          user_id: "ed778dc6-d4bb-4949-a939-84160db43edb",
      }),
  { 
      method: 'GET',
      headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
      },
  });

  const data = await response.json();
  console.log(data)
  return data
};

function ProfilePage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [formattedFirstName, setFormattedFirstName] = useState("")
  
    useEffect(() => {
          (async () => {
              const userData = await getUserData()
              setFirstName(`${userData['first_name']}`)
              setLastName(`${userData['last_name']}`)

              // Appropriately format possesive name for profile form title
              let possessiveName: string;
              if(userData['first_name'].substring(userData['first_name'].length - 1).toLowerCase() !== 's') {
                possessiveName = `${userData['first_name']}'s`
              }
              else {
                possessiveName = `${userData['first_name']}'`
              }
              setFormattedFirstName(possessiveName)
          })()
      }, []);

    return ( 
      <div className="min pt-15 h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
        <div className="max-w-[500px] rounded-3xl border bg-gray-300 p-8 mx-10 shadow-xl space-y-5">
          <h2 className="col-span-6 text-2xl font-bold">{formattedFirstName} Profile</h2>
          <TextInput 
            inputId="firstName"
            fieldName="firstName"
            fieldValue={firstName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(event.target.value)
            }
            labelValue="First Name"
            placeholder="First Name"
          />

          <TextInput 
            inputId="lastName"
            fieldName="lastName"
            fieldValue={lastName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(event.target.value)
            }
            labelValue="Last Name"
            placeholder="Last Name"
          />
        </div>
      </div>
    )
  }
  
  export default ProfilePage;
  