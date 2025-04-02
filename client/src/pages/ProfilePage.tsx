import TextInput from "../components/inputs/TextInput";
import { useState } from "react";

function ProfilePage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  
    return ( 
      <div className="min pt-15 h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
        <div className="max-w-[500px] rounded-3xl border bg-gray-300 p-8 mx-10 shadow-xl space-y-5">
          <h2 className="col-span-6 text-2xl font-bold">Your Profile</h2>
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
  