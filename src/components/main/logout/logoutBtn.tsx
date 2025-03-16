import { handleSuccess } from '@/utils/helper';
import { useNavigate } from 'react-router-dom';
import { useAuthHook } from '@/hooks/authHook';
import Button from '@/components/ui/Button';
import { useAuthContext } from '@/contexts/AuthContext';

const LogoutBtn = () => {
  const { setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const { logoutUser } = useAuthHook();

  const handleLogout = async () => {
    setIsAuthenticated(false);
    logoutUser();
    localStorage.clear();
    handleSuccess('Logout Successfull', navigate, '/');
  };
  return (
    <Button className='pry-btn' type='button' onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutBtn;
