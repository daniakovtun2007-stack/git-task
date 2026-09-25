import { createContext, useState } from "react";
import Block1 from "./Block1";

export const UserContext = createContext();

export default function App() {
  const [count, setCount] = useState(0);

  const upCount = () => setCount((prev) => prev + 1);
  const downCount = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const resetCount = () => setCount(0);

  return (
    <UserContext.Provider value={{ count, upCount, downCount, resetCount }}>
      <Block1 />
    </UserContext.Provider>
  );
}