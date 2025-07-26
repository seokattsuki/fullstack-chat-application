import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  // Convert file to base64
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const base64Image = await convertToBase64(file);
    setSelectedImg(base64Image);

    try {
      await updateProfile({ profilePic: base64Image });
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="max-w-2xl mx-auto">
          <div className="bg-base-300 rounded-xl p-4 sm:p-6 space-y-8 w-full">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Profile</h1>
              <p className="mt-2 text-base-content/70">Your profile information</p>
            </div>

            {/* Avatar Upload */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <img
                  src={selectedImg || authUser?.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="size-32 rounded-full object-cover border-4"
                />
                <label
                  htmlFor="avatar-upload"
                  className={`
                    absolute bottom-0 right-0 
                    bg-base-content hover:scale-105
                    p-2 rounded-full cursor-pointer 
                    transition-all duration-200
                    ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                  `}
                >
                  <Camera className="w-5 h-5 text-base-200" />
                  <input
                    type="file"
                    id="avatar-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={isUpdatingProfile}
                  />
                </label>
              </div>
              <p className="text-sm text-zinc-400 text-center max-w-xs">
                {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
              </p>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div className="space-y-1.5">
                <div className="text-sm text-zinc-400 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </div>
                <p className="px-4 py-2.5 bg-base-200 rounded-lg border w-full break-words">
                  {authUser?.fullName}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-sm text-zinc-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </div>
                <p className="px-4 py-2.5 bg-base-200 rounded-lg border w-full break-words">
                  {authUser?.email}
                </p>
              </div>
            </div>

            {/* Account Info */}
            <div className="bg-base-200 rounded-xl p-4 sm:p-6 w-full">
              <h2 className="text-lg font-medium mb-4">Account Information</h2>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-zinc-700">
                  <span className="text-base-content/70">Member Since</span>
                  <span className="mt-1 sm:mt-0 font-medium">
                    {authUser?.createdAt?.split("T")[0] || "2025-07-25"}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
                  <span className="text-base-content/70">Account Status</span>
                  <span className="text-green-500 mt-1 sm:mt-0 font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;