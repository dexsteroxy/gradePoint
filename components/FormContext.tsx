// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// interface FormData {
//   level: string;
//   semester: string;
//   year: string;
// }

// interface FormContextProps {
//   formData: FormData;
//   saveFormData: (data: FormData) => void;
// }

// const FormContext = createContext<FormContextProps | undefined>(undefined);

// export const useFormContext = (): FormContextProps => {
//   const context = useContext(FormContext);
//   if (!context) {
//     throw new Error('useFormContext must be used within a FormProvider');
//   }
//   return context;
// };

// interface FormProviderProps {
//   children: ReactNode;
// }

// export const FormProvider = ({ children }: FormProviderProps) => {
//   const [formData, setFormData] = useState<FormData>(() => {
//     if (typeof window !== 'undefined') {
//       const storedData = localStorage.getItem('formData');
//       return storedData ? JSON.parse(storedData) : { level: '', semester: '', year: '' };
//     }
//     return { level: '', semester: '', year: '' };
//   });

//   // Save form data to localStorage on formData change
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('formData', JSON.stringify(formData));
//     }
//   }, [formData]);

//   const saveFormData = (data: FormData) => {
//     setFormData(data);
//   };

//   return (
//     <FormContext.Provider value={{ formData, saveFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };













//trying one 


import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface FormData {
  level: string;
  semester: string;
  year: string;
  gradePoint?: string; // Optional gradePoint
}

interface FormContextProps {
  formDataList: FormData[];
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
  const [formDataList, setFormDataList] = useState<FormData[]>(() => {
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('formDataList');
      return storedData ? JSON.parse(storedData) : [];
    }
    return [];
  });

  // Save form data to localStorage on formDataList change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('formDataList', JSON.stringify(formDataList));
    }
  }, [formDataList]);

  const saveFormData = (data: FormData) => {
    setFormDataList((prev) => [...prev, data]);
  };

  return (
    <FormContext.Provider value={{ formDataList, saveFormData }}>
      {children}
    </FormContext.Provider>
  );
};
