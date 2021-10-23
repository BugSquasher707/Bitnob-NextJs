import { Router } from "next/dist/client/router";

export const redirect = (link)=> Router.push(link) 

export const isBrowser = () => {
    if (typeof window !== "undefined") return window;
    return false;
  };
  

export const screenSize = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
