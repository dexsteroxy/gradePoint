
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CourseInput {
  code: string;
  unit: string;
  grade: string;
  gradePoints?: string;  // Optional field
}

interface CalculationState {
  gradePoint: string | null;
  calculationDetails: CourseInput[];
}

const initialState: CalculationState = {
  gradePoint: localStorage.getItem('gradePoint') || null,  // Load from localStorage
  calculationDetails: JSON.parse(localStorage.getItem('calculationDetails') || '[]'),  // Load from localStorage
};

const calculationSlice = createSlice({
  name: 'calculation',
  initialState,
  reducers: {
    setGradePointAndDetails: (
      state,
      action: PayloadAction<{ gradePoint: string; calculationDetails: CourseInput[] }>
    ) => {
      state.gradePoint = action.payload.gradePoint;
      state.calculationDetails = action.payload.calculationDetails;

      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('gradePoint', state.gradePoint);
        localStorage.setItem('calculationDetails', JSON.stringify(state.calculationDetails));
      }
    },
    clearCalculation: (state) => {
      state.gradePoint = null;
      state.calculationDetails = [];

      // Clear from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('gradePoint');
        localStorage.removeItem('calculationDetails');
      }
    },
  },
});

export const { setGradePointAndDetails, clearCalculation } = calculationSlice.actions;
export default calculationSlice.reducer;


