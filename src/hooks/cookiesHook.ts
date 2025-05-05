import Cookies from 'js-cookie';
interface ICookieOptions {
  expires: number;
  path: string;
  secure?: boolean;
}

export const useCookies = () => {
  const setCookies = (tokenName: string, token: string, options?: Partial<ICookieOptions>) => {
    const defaultOptions: ICookieOptions = {
      expires: 7, // Default expiration: 7 days
      path: '/',
    };

    // Conditionally set secure option based on the environment
    if (process.env.NODE_ENV === 'production') {
      defaultOptions.secure = true;
    }

    // Merge default options with custom options, ensuring 'expires' is used instead of 'maxAge'
    const cookieOptions = { ...defaultOptions, ...options };

    Cookies.set(tokenName, token, cookieOptions);
  };

  const getTokenCookie = (tokenName: string) => {
    return Cookies.get(tokenName);
  };

  const removeTokenCookie = (tokenName: string) => {
    Cookies.remove(tokenName);
    return false;
  };

  return {
    setCookies,
    getTokenCookie,
    removeTokenCookie,
  };
};
