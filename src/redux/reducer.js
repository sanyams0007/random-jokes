import { LOGIN, LOGOUT } from "./constant";

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN: {
      const { rememberMe } = action.payload;
      if (rememberMe)
        localStorage.setItem(
          "auth",
          JSON.stringify({ user: action.payload, isAuthenticated: true })
        );
      return {
        ...state,
        auth: { user: action.payload, isAuthenticated: true },
      };
    }

    case LOGOUT: {
      localStorage.clear();
      return {
        auth: { user: {}, isAuthenticated: false },
      };
    }

    default:
      return state;
  }
};
