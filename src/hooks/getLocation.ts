export interface LocationData {
  latitude: number;
  longitude: number;
}

export function getLocation(): Promise<LocationData> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error('Geolocation error:', error);
          reject(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
}
