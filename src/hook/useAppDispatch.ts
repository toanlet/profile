import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'src/store';
export const useAppDispatch = () => useDispatch<AppDispatch>();
