const staticUrl: string = `//${window.location.hostname}:8000`;

export function getImagePath(image: string): string {
  return `${staticUrl}/images/${image}`;
}

export function getUploadPath(): string {
  return `${staticUrl}/upload`;
}
