import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Dashboard = () => {
    const {userr} = useContext(AuthContext);
    
    return (
        <div className="flex justify-center items-center mt-10">
            
            <div className="w-1/2  flex flex-col bg-blue-50">
            <p className="text-5xl py-10 font-extrabold text-center bg-white text-purple-900">Dashboard</p>
                <img src={userr.photoURL} alt="" />
                <p className="text-2xl px-10 pt-8 bg-blue-50 text-black font-bold">Name: <span className="text-blue-900 font-bold">{userr.displayName}</span></p>
                <p className="text-2xl px-10 pb-10 bg-blue-50 text-black font-bold">Email: <span className="text-blue-900 underline">{userr.email}</span></p>
            </div>
        </div>
    );
};

export default Dashboard;