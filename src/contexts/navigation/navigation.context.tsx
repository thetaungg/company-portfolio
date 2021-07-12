import React, { createContext, ReactNode, useState } from "react";

export interface NavigationContextState {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => any;
}

export const NavigationContext = createContext<NavigationContextState>({
  currentPage: 0,
  totalPages: 4,
  onPageChange: () => {},
});

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const totalPages = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };

  return (
    <NavigationContext.Provider value={{ totalPages, currentPage, onPageChange }}>
      {children}
    </NavigationContext.Provider>
  );
};
