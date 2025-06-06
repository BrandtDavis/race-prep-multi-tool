import SubmitButton from "../components/inputs/SubmitButton";
import TextInput from "../components/inputs/TextInput";

import { useState } from "react";

function RegistrationPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = async () => {
        const response = await fetch(
            "http://localhost:5000/register_user",
        {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              first_name: firstName, 
              last_name: lastName,
              email: email,
              password: password,
              confirm_password: confirmPassword
            })
        });
        const data = await response.json();
        console.log(data)
        return;
    };

    return (
        <div>
            <form className="w-full">
            <div className="min pt-15 h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
                <div className="max-w-[500px] rounded-3xl border bg-gray-300 p-8 mx-10 shadow-xl space-y-5">
                    <div className="container grid w-full grid-cols-6 gap-6 px-4 py-2">
                        <h2 className="col-span-6 text-2xl font-bold"> Account Registration </h2>

                        <div className="col-span-6 mb-2">
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
                        </div>

                        <div className="col-span-6 mb-2">
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

                        <div className="col-span-6 mb-2">
                            <TextInput 
                                inputId="email"
                                fieldName="email"
                                fieldValue={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setEmail(event.target.value)
                                }
                                labelValue="Email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="col-span-6 mb-2">
                            <TextInput 
                                inputId="password"
                                fieldName="password"
                                fieldValue={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setPassword(event.target.value)
                                }
                                labelValue="Password"
                                placeholder="Password"
                            />
                        </div>

                        <div className="col-span-6 mb-2">
                            <TextInput 
                                inputId="confirmPassword"
                                fieldName="confirmPassword"
                                fieldValue={confirmPassword}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setConfirmPassword(event.target.value)
                                }
                                labelValue="Confirm Password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="col-span-6 mb-4">
                            <SubmitButton
                                buttonText="Register"
                                handleClick={() =>{registerUser()}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )

}

export default RegistrationPage;