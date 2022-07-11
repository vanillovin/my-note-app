export function getLocation(): Promise<{
  err: number;
  time?: any;
  latitude: number;
  longitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      const now = new Date();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('getLocation position', position);
          resolve({
            err: 0,
            time: now.toLocaleTimeString(),
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          console.log('getLocation err', err);
          resolve({
            err: -1,
            latitude: -1,
            longitude: -1,
          });
        },
        { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
      );
    } else {
      reject({ error: -2, latitude: -1, longitude: -1 });
    }
  });
}
