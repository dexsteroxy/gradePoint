import React, { createContext, useContext, useState } from 'react';

interface CalculationDetail {
  code: string;
  unit: string;
  grade: string;
  gradePoints: string;
}

interface CalculationContextType {
  gradePoint: string | null;
  calculationDetails: CalculationDetail[];
  setGradePoint: (gradePoint: string | null) => void;
  setCalculationDetails: (details: CalculationDetail[]) => void;
}

const CalculationContext = createContext<CalculationContextType | undefined>(undefined);

export const CalculationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gradePoint, setGradePoint] = useState<string | null>(null);
  const [calculationDetails, setCalculationDetails] = useState<CalculationDetail[]>([]);

  return (
    <CalculationContext.Provider value={{ gradePoint, calculationDetails, setGradePoint, setCalculationDetails }}>
      {children}
    </CalculationContext.Provider>
  );
};

export const useCalculation = () => {
  const context = useContext(CalculationContext);
  if (!context) {
    throw new Error('useCalculation must be used within a CalculationProvider');
  }
  return context;
};
