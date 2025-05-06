import TextInput from "../components/inputs/TextInput";
import CalculateButton from "../components/inputs/calculateButton";
import { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {
        const response = await fetch(
          'http://localhost:5000/login',
        { 
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
            })
        });
      
        const data = await response.json();
        console.log(data)
        return data
    };

    return (
        <form className="w-full">
            <div className="min pt-15 h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
                <div className="max-w-[500px] rounded-3xl border bg-gray-300 p-8 mx-10 shadow-xl space-y-5">
                    <div className="container grid w-full grid-cols-6 gap-6 px-4 py-2">
                        <h2 className="col-span-6 text-2xl font-bold">Sign In</h2>

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
                        <div className="col-span-6 mb-4">
                            <CalculateButton
                                buttonText="Sign In"
                                handleClick={() =>{loginUser()}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default LoginPage;