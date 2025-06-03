import type { AuthUserDataDTO, LoginUserDTO, UserRole } from "@/types/auth";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import React from "react";
import { useState } from "react";
import Button from "../../ui/Button";
import * as API from "@/services/auth";
import { handleSuccess, handleError } from "@/utils/helper";
import { useGlobalHooks } from "@/hooks/globalHooks";
import { useAuthContext } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "@/hooks/cookiesHook";

const LoginForm = () => {
  const { setCookies } = useCookies();
  const { setUserData, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { loading, setLoading } = useGlobalHooks();
  const [formData, setFormData] = useState<LoginUserDTO>({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false); // State for 'Remember Me'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading({ ["login"]: true });

    API.authService
      .login(formData)
      .then((res) => {
        console.log("Login API Response:", res);
        setIsAuthenticated(true);

        const user = res?.data?.user || {};
        const validRoles: UserRole[] = ["PARTNER", "TALENT", "MENTOR"];
        const role = validRoles.includes(user.role?.toUpperCase() as any)
          ? (user.role as UserRole)
          : "TALENT";
        const fullUserData: AuthUserDataDTO = {
          _id: user._id || "",
          userId: user.userId || user._id || "",
          isNewUser: user.isNewUser || false,
          isProfileDataSet: user.isProfileDataSet || false,
          role: role.toUpperCase() as UserRole, // Normalize to uppercase
          email: user.email || formData.email,
          dateCreated: user.dateCreated || new Date().toISOString(),
          token: res?.data?.token || "",
          tokenInitializationDate:
            user.tokenInitializationDate || new Date().toISOString(),
          tokenExpiryDate: user.tokenExpiryDate || "",
          profileImageUrl: user.profileImageUrl,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          date_of_birth: user.date_of_birth,
          user: user.user || {
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            phoneNumber: user.phoneNumber,
            profileImageUrl: user.profileImageUrl,
            date_of_birth: user.date_of_birth,
          },
        };
        setUserData(fullUserData);

        setCookies("authToken", res?.data?.token, {
          path: "/",
          expires: rememberMe ? 30 : 7,
        });

        setLoading({ ["login"]: false });
        handleSuccess(
          "User logged in successfully",
          navigate,
          `/${role.toLowerCase()}/dashboard`
        );
      })
      .catch((err) => {
        console.log("Login Error:", err);
        setLoading({ ["login"]: false });
        handleError(err?.response?.data?.message || "An error occurred");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl space-y-6">
      <article>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </article>

      <article>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={handleChange}
            className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </article>

      <article className="text-end">
        <Link
          to="/forgot-password-request"
          className="text-primary font-semibold"
        >
          Forgot Password?
        </Link>
      </article>

      <article className="flex items-center">
        <input
          id="rememberMe"
          name="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label
          htmlFor="rememberMe"
          className="ml-2 block text-sm text-gray-900"
        >
          Remember Me
        </label>
      </article>

      <Button
        className="pry-btn w-full"
        type="submit"
        loading={loading["login"]}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
