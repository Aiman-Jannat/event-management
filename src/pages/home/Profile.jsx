import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Profile = () => {
    const {userr} = useContext(AuthContext);
    
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="w-1/2 flex flex-col bg-blue-50">
            <p className="text-5xl py-10 font-extrabold text-center bg-white text-purple-900">Profile</p>
                <img src={userr.photoURL} alt="" />
                <p className="text-2xl px-10 pt-8 text-black font-bold">Name: <span className="text-blue-900 font-bold">{userr.displayName}</span></p>
                <p className="text-2xl px-10 pb-10 text-black font-bold">Email: <span className="text-blue-900 underline">{userr.email}</span></p>
            </div>
        </div>
    );
};

export default Profile;