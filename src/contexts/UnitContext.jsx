import { createContext, useContext, useState } from "react";

const UnitContext = createContext();

function UnitProvider({ children }) {
  const [unit, setUnit] = useState("C");

  return (
    <UnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitContext.Provider>
  );
}

function useUnit() {
  const context = useContext(UnitContext);
  if (context === "undefined")
    throw new Error("Unit context was used outside UnitProvider");

  return context;
}

export { UnitProvider, useUnit };
