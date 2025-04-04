import Cookies from 'js-cookie';
interface ICookieOptions {
  expires: number;
  path: string;
  secure?: boolean;
}

export const useCookies = () => {
  const setCookies = (tokenName: string, token: string) => {
    const cookieOptions: ICookieOptions = {
      // Expires in 7 days
      expires: 7,
      // The cookie is accessible across all paths on the domain
      path: '/',
    };

    // Conditionally set secure option based on the environment
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV === 'production') {
      // Set secure to true in production for HTTPS-only
      cookieOptions.secure = true;
    }

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
