import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('formData');
      return storedData ? JSON.parse(storedData) : { level: '', semester: '', year: '' };
    }
    return { level: '', semester: '', year: '' };
  });

  // Save form data to localStorage on formData change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  }, [formData]);

  const saveFormData = (data: FormData) => {
    setFormData(data);
  };

  return (
    <FormContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormContext.Provider>
  );
};


