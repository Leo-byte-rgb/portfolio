import {
  createContext,
  useEffect,
  useReducer,
  useState,
  Dispatch,
  ReactNode,
} from "react";

type StateProps = {
  home: number;
  about: number;
  resume: number;
  contact: number;
};

type ActionProps = {
  type: "about" | "resume" | "contact";
  payload: number;
};

const initialState = {
  home: 0,
  about: 0,
  resume: 0,
  contact: 0,
};

interface IContextProps {
  position: number;
  state: StateProps;
  dispatch: Dispatch<ActionProps>;
}

const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "about":
      return { ...state, about: action.payload };
    case "resume":
      return { ...state, resume: action.payload };
    case "contact":
      return { ...state, contact: action.payload };
    default:
      throw new Error();
  }
};

const HeightContext = createContext<IContextProps>({} as IContextProps);

const HeightProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosition(window.scrollY);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setPosition(window.scrollY);
      });
  }, []);

  return (
    <HeightContext.Provider value={{ state, dispatch, position }}>
      {children}
    </HeightContext.Provider>
  );
};

export { HeightContext, HeightProvider };
