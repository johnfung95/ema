"use client";
import React, { createContext, useContext, useState } from "react";

const EmaContext = createContext({
  isCommentClicked: false,
  setIsCommentClicked: (clicked: boolean) => {},
});

export const EmaProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCommentClicked, setIsCommentClicked] = useState(false);

  return (
    <EmaContext.Provider value={{ isCommentClicked, setIsCommentClicked }}>
      {children}
    </EmaContext.Provider>
  );
};

export const useEma = () => useContext(EmaContext);
