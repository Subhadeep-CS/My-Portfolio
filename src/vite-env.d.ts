/// <reference types="vite/client" />

declare module "*.glb" {
    const content: string;
    export default content;
  }
  declare module "../assets/images" {
    const meta: string;
    const shopify: string;
    const starbucks: string;
    const tesla: string;
    export { meta, shopify, starbucks, tesla };
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.jpg" {
    const value: string;
    export default value;
}

declare module "*.jpeg" {
    const value: string;
    export default value;
}

declare module "*.svg" {
    const value: string;
    export default value;
}

declare module "*.gif" {
    const value: string;
    export default value;
}

