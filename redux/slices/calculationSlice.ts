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
  gradePoint: null,
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
      state.gradePoint = action.payload.gradePoint;
      state.calculationDetails = action.payload.calculationDetails;
    },
  },
});

export const { setGradePointAndDetails } = calculationSlice.actions;
export default calculationSlice.reducer;



