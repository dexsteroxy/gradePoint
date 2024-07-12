import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  level: string;
  semester: string;
  year: string;
}

interface FormContextProps {
  formData: FormData;
  saveFormData: (data: FormData) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [formData, setFormData] = useState<FormData>({
    level: '',
    semester: '',
    year: '',
  });

  const saveFormData = (data: FormData) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormContext.Provider>
  );
};
































