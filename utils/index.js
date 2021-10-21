import { Router } from "next/dist/client/router";

export const redirect = (link)=> Router.push(link) 

export const isBrowser = () => {
    if (typeof window !== "undefined") return window;
    return false;
  };
  