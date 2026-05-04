import { create } from 'zustand'

type Breadcrumb = {
    goTo: number;
    name: string;
}

type StoreInterface = {
    device: string;
    breadcrumbs: Breadcrumb[];
    updateDevice: (data: string) => void;
    updateBreadcrumbGoTo: (name: string, value: number) => void;
}

export const useStore = create<StoreInterface>()((set) => ({
  device: '',
  breadcrumbs: [
    {goTo: 0, name: 'Home'},
    {goTo: 0, name: 'Expertise'},
    {goTo: 0, name: 'Project'},
    {goTo: 0, name: 'Experience'},
  ],
  updateDevice: (data: string) => set({ device: data }),
  updateBreadcrumbGoTo: (name: string, value: number) => set((state) => ({
    breadcrumbs: state.breadcrumbs.map((b) => 
      b.name === name ? { ...b, goTo: value } : b
    )
  })),
}))

// Keeping old name for backward compatibility
export const useCheckDevice = useStore;
