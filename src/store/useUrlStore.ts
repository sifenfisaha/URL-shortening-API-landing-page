import { create } from "zustand";

type ShortLink = {
  originalUrl: string;
  shortUrl: string;
};

type UrlState = {
  links: ShortLink[];
  addLink: (link: ShortLink) => void;
};

export const useUrlStore = create<UrlState>((set) => ({
  links: [],
  addLink: (link) => set((state) => ({ links: [link, ...state.links] })),
}));
