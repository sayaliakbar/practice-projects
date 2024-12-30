import { create } from "zustand";
import jobData from "./data.json";

const useJobStore = create((set) => ({
  jobs: jobData, // Load JSON data directly
  filters: [],
  addFilter: (filter) =>
    set((state) => ({
      filters: state.filters.includes(filter)
        ? state.filters
        : [...state.filters, filter],
    })),
  removeFilter: (filter) =>
    set((state) => ({
      filters: state.filters.filter((f) => f !== filter),
    })),
  clearFilters: () => set({ filters: [] }),
}));

export default useJobStore;
