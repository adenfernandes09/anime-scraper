'use server';

export const getAnimeDetails = async(page : number) => {
    const animeFetch = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await animeFetch.json();
    return data;
}