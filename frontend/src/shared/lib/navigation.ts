let navigator: (path: string) => void;

export const setNavigator = (navFn: (path: string) => void) => {
  navigator = navFn;
};

export const redirectToLogin = () => {
  if (navigator) {
    navigator('/auth');
  } else {
    window.location.href = '/auth';
  }
};