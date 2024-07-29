



// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CourseInput {
//   code: string;
//   unit: string;
//   grade: string;
//   gradePoints?: string;  // Optional field
// }

// interface CalculationState {
//   gradePoint: string | null;
//   calculationDetails: CourseInput[];
// }

// const initialState: CalculationState = {
//   gradePoint: localStorage.getItem('gradePoint') || null,  // Load from localStorage
//   calculationDetails: JSON.parse(localStorage.getItem('calculationDetails') || '[]'),  // Load from localStorage
// };

// const calculationSlice = createSlice({
//   name: 'calculation',
//   initialState,
//   reducers: {
//     setGradePointAndDetails: (
//       state,
//       action: PayloadAction<{ gradePoint: string; calculationDetails: CourseInput[] }>
//     ) => {
//       state.gradePoint = action.payload.gradePoint;
//       state.calculationDetails = action.payload.calculationDetails;

//       // Save to localStorage
//       if (typeof window !== 'undefined') {
//         localStorage.setItem('gradePoint', state.gradePoint);
//         localStorage.setItem('calculationDetails', JSON.stringify(state.calculationDetails));
//       }
//     },
//     clearCalculation: (state) => {
//       state.gradePoint = null;
//       state.calculationDetails = [];

//       // Clear from localStorage
//       if (typeof window !== 'undefined') {
//         localStorage.removeItem('gradePoint');
//         localStorage.removeItem('calculationDetails');
//       }
//     },
//   },
// });

// export const { setGradePointAndDetails, clearCalculation } = calculationSlice.actions;
// export default calculationSlice.reducer;










//trying one




import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseInput {
  code: string;
  unit: string;
  grade: string;
}

interface FormData {
  level: string;
  semester: string;
  year: string;
  gradePoint: string;
  calculationDetails: CourseInput[];
}

interface CalculationState {
  calculations: FormData[];
}

const initialState: CalculationState = {
  calculations: JSON.parse(localStorage.getItem('calculations') || '[]'),
};

const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    addCalculation: (
      state,
      action: PayloadAction<FormData>
    ) => {
      state.calculations.push(action.payload);

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('calculations', JSON.stringify(state.calculations));
      }
    },
    clearCalculations: (state) => {
      state.calculations = [];

      // Clear from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('calculations');
      }
    },
  },
});

export const { addCalculation, clearCalculations } = calculationSlice.actions;
export default calculationSlice.reducer;
