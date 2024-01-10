import { useThemeContext } from "@/contexts/ThemeContext";



export default function Profile() {

const { userData } = useThemeContext();


  return (
    <div className="h-full">
      <h1 className="text-center">Profile</h1>
      {/* @ts-ignore */}
      <h2 className="text-center">Username: {userData && userData.userName}</h2> 
    </div>
  );
}
