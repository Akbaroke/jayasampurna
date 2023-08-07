export default function getImgUrl(name: string): string {
  return new URL(`${name}`, import.meta.url).href;
}
