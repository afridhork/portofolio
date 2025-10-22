import { create } from 'zustand'


type checkDeviceInterface = {
    device: string,
    updateDevice: (data: string) => void
}

export const useCheckDevice = create<checkDeviceInterface>()((set) => ({
  device: '',
  updateDevice: (data: string) => set({ device: data }),
}))
