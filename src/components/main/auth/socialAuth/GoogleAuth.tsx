import * as API from "@/services/auth";
import { auth } from "@/firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import { useGlobalHooks } from "@/hooks/globalHooks";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "@/components/ui/Button";
import { handleError, handleSuccess } from "@/utils/helper";
import { UserRole, AuthUserDataDTO } from "@/types/auth";
import { useAuthContext } from "@/contexts/AuthContext";
import { useCookies } from "@/hooks/cookiesHook";
import { useNavigate } from "react-router-dom";

interface GoogleAuthProps {
  initialRole?: string;
}

const GoogleAuth: React.FC<GoogleAuthProps> = ({ initialRole }) => {
  const { loading, setLoading } = useGlobalHooks();
  const { setCookies } = useCookies();
  const { setUserData, setIsAuthenticated, userData } = useAuthContext();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleGoogleAuth = async () => {
    setLoading({ ["google"]: true });
    try {
      const result = await signInWithPopup(auth, provider);

      const authData = {
        thirdPartyUserId: result.user.providerData[0].uid as string,
        provider: "GOOGLE",
        email: result?.user?.email as string,
        firstName: result.user.providerData[0].displayName
          ?.split(" ")
          .at(0) as string,
        lastName: result.user.providerData[0].displayName
          ?.split(" ")
          .at(1) as string,
        profileImageUrl: result.user.photoURL as string,
        role: (initialRole || userData?.role || "TALENT") as UserRole,
      };

      console.log("Google Auth Request Data:", authData);

      const res = await API.authService.thirdPartyAuth(authData);
      console.log("Google Auth API Response:", res);

      setLoading({ ["google"]: false });
      if (!res?.success) {
        handleError(res?.message || "An unexpected error occurred.");
        return;
      }

      setIsAuthenticated(true);

      const firstName = res?.data?.user?.firstName as string;
      const lastName = res?.data?.user?.lastName as string;
      const email = res?.data?.user?.email as string;
      const _id = res?.data?.user?._id as string;
      const profileImageUrl = res?.data?.user?.profileImageUrl as string;
      const validRoles: UserRole[] = ["PARTNER", "TALENT", "MENTOR"];
      const role = validRoles.includes(
        res?.data?.user?.role?.toUpperCase() as any
      )
        ? (res?.data?.user?.role as UserRole)
        : authData.role;
      const fullUserData: AuthUserDataDTO = {
        _id: _id || "",
        userId: _id || "",
        isNewUser: res?.data?.isNewUser || false,
        isProfileDataSet: res?.data?.user?.isProfileDataSet || false,
        role: role.toUpperCase() as UserRole, // Normalize to uppercase
        email: email || authData.email,
        dateCreated: res?.data?.user?.dateCreated || new Date().toISOString(),
        token: res?.data?.token || "",
        tokenInitializationDate:
          res?.data?.user?.tokenInitializationDate || new Date().toISOString(),
        tokenExpiryDate: res?.data?.user?.tokenExpiryDate || "",
        profileImageUrl,
        firstName,
        lastName,
        phoneNumber: res?.data?.user?.phoneNumber,
        date_of_birth: res?.data?.user?.date_of_birth,
        user: {
          firstName: firstName || authData.firstName,
          lastName: lastName || authData.lastName,
          phoneNumber: res?.data?.user?.phoneNumber,
          profileImageUrl: profileImageUrl || authData.profileImageUrl,
          date_of_birth: res?.data?.user?.date_of_birth,
          isEmailVerified: res?.data?.user?.user?.isEmailVerified || true,
        },
      };
      setUserData(fullUserData);

      setCookies("authToken", res?.data?.token as string, {
        path: "/",
        expires: 7,
      });
      handleSuccess(
        res?.message || "Welcome Back",
        navigate,
        `/${role.toLowerCase()}/dashboard`
      );
    } catch (err) {
      console.log("Google Auth Error:", err);
      setLoading({ ["google"]: false });
      handleError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleGoogleAuth}
        loading={loading["google"]}
        className="outline-btn !text-black w-full"
      >
        <FcGoogle className="h-5 w-5" />
        <span className="ml-2">Google</span>
      </Button>
    </div>
  );
};

export default GoogleAuth;
