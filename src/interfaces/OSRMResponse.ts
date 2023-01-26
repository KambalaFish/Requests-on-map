export interface OSRMResponse {
  code: string;
  routes: {
    legs: {
      steps: {
        geometry: string;
      }[];
    }[];
  }[];
}
