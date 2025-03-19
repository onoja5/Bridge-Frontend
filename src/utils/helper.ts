import { toast } from '@/hooks/use-toast';

export const handleCopyToClipboard = (
  id: string | number,
  val: string,
  message: string,
) => {
  if (id) {
    navigator.clipboard.writeText(val);

    toast({
      title: 'Success',
      description: message,
      className: 'bg-SeaGreen border-SeaGreen',
    });
  }
};

export const removeSpaces = (str: string) => {
  return str.replace(/\s+/g, '-').replace(/\//g, 'and');
};

export const handleSuccess = (
  message: string,
  navigate?: (href: string) => void,
  path?: string,
) => {
  if (path && navigate) {
    toast({
      variant: 'default',
      title: 'Success',
      description: message,
    });
    navigate(path);
  } else {
    toast({
      variant: 'default',
      title: 'Success',
      description: message,
    });
  }
};

export const handleError = (message: string) => {
  toast({
    variant: 'destructive',
    title: 'error',
    description: message,
  });
};

export function setGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour < 12) {
    return 'Good morning 🌤️';
  } else if (currentHour < 18) {
    return 'Good afternoon ☀️';
  } else {
    return 'Good evening 🌙';
  }
}
