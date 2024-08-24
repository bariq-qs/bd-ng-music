import { defineStore } from "pinia";
import type { TMusicState, TResultMusic } from "./model";

const route = useRoute();
export const useMusicStore = defineStore("music", {
  state: (): TMusicState => {
    return {
      musicList: [],
      limit: 0,
      searchValue: (route.query?.q as string) ?? "",
      isLoading: false,
    };
  },
  actions: {
    async fetchMusic(limit: number) {
      try {
        this.isLoading = true;
        const newLimit = this.limit + limit;
        const params = new URLSearchParams({
          limit: newLimit.toString(),
          term: this.searchValue,
          media: 'music'
        });
        const response = await fetch(
          `${useRuntimeConfig()?.public.baseApiUrl}/search?${params}`
        );
        const data: {
          resultCount: number;
          results: TResultMusic[];
        } = await response.json();
        this.limit = data.resultCount;
        this.musicList = data.results;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    },
  },
  getters: {
    getSearchVal(state) {
      return state.searchValue;
    },
  },
});
