const hostname: string = window.location.hostname;
const staticUrl: string = `//${hostname}:8000`;
const graphqlUrl: string = `//${hostname}:4000`;

export function getImagePath(image: string): string {
  return `${staticUrl}/images/${image}`;
}

export function getUploadPath(): string {
  return `${staticUrl}/upload`;
}

export function getGraphqlPath(): string {
  return graphqlUrl;
}
