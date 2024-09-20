import React, { createContext } from "react";

interface ModeContextType {
    mode: string;
    setMode: React.Dispatch<React.SetStateAction<string>>;
}
  

export const toggleMode = createContext<ModeContextType>({
    mode:"light",
    setMode: () => {},
});
