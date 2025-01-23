'use server';
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const getAnimeDetails = async(page : number) => {
    const animeFetch = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await animeFetch.json();
    return data.map((item: AnimeProp, index:number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
}