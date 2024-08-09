
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseInput {
  code: string;
  unit: string;
  grade: string;
  gradePoints?: string;  // Optional field
}

interface CalculationState {
  gradePoints: string[];
  calculationDetails: CourseInput[];
}

const initialState: CalculationState = {
  gradePoints: [],
  calculationDetails: [],
};

const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    setGradePointAndDetails: (
      state,
      action: PayloadAction<{ gradePoint: string; calculationDetails: CourseInput[] }>
    ) => {
      const { gradePoint, calculationDetails } = action.payload;

      // Append new calculationDetails and corresponding gradePoint
      state.calculationDetails = [...state.calculationDetails, ...calculationDetails];
      state.gradePoints = [
        ...state.gradePoints,
        ...Array(calculationDetails.length).fill(gradePoint),
      ];

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('gradePoints', JSON.stringify(state.gradePoints));
        localStorage.setItem('calculationDetails', JSON.stringify(state.calculationDetails));
      }
    },
    clearCalculation: (state) => {
      state.gradePoints = [];
      state.calculationDetails = [];

      // Clear from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('gradePoints');
        localStorage.removeItem('calculationDetails');
      }
    },
    deleteCalculationDetail: (state, action: PayloadAction<number>) => {
      const indexToDelete = action.payload;
      state.calculationDetails = state.calculationDetails.filter((_, index) => index !== indexToDelete);
      state.gradePoints = state.gradePoints.filter((_, index) => index !== indexToDelete);

      // Save updated state to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('gradePoints', JSON.stringify(state.gradePoints));
        localStorage.setItem('calculationDetails', JSON.stringify(state.calculationDetails));
      }
    },
    loadStateFromLocalStorage: (state) => {
      // This is a reducer to initialize the state from localStorage
      if (typeof window !== 'undefined') {
        state.gradePoints = JSON.parse(localStorage.getItem('gradePoints') || '[]');
        state.calculationDetails = JSON.parse(localStorage.getItem('calculationDetails') || '[]');
      }
    },
  },
});

export const { setGradePointAndDetails, clearCalculation, deleteCalculationDetail, loadStateFromLocalStorage } = calculationSlice.actions;
export default calculationSlice.reducer;

