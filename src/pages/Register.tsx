import { useThemeContext } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function Register() {
  const {setUserData} = useThemeContext();

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    username: "",
    password: ""
  })

  function handleCurrentData(e: React.ChangeEvent<HTMLInputElement>){
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  function submitUserData(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setUserData({...formData, isLoggedIn: true})
  }


  return (
    <div className="h-full">
      <h1 className="text-center text-3xl">Register</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center" onSubmit={submitUserData}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fName">First Name:</label>
        <input onChange={handleCurrentData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="fName" name="fName" placeholder="First Name" />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lName">Last Name:</label>
        <input onChange={handleCurrentData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="lName" name="lName" placeholder="Last Name" />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">Username:</label>
        <input onChange={handleCurrentData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="userName" name="userName" placeholder="Username" />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Passwort:</label>
        <input onChange={handleCurrentData} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" placeholder="Passwort" />
        <br />
        <br />
        <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit</button>
      </form>
    </div>
  );
}