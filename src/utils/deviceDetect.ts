import { useState, useEffect } from 'react';

export type DeviceType = 'android' | 'ios' | 'desktop';

export function getDeviceType(): DeviceType {
  if (typeof window === 'undefined') return 'desktop';
  const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';
  if (/android/i.test(ua)) {
    return 'android';
  }
  if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
    return 'ios';
  }
  return 'desktop';
}

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    setDevice(getDeviceType());
  }, []);

  return device;
}
