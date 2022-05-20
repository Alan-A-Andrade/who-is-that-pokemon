export function useSleep (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
