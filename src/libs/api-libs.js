
export async function  getServerSideProps(resource, query) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json();
    return {props: {
        data:anime

    }}
}
export const getNestedResponse = async(resource, objectProp) => {
    const {props: {data: anime}} = await getStaticProps(resource)
    return anime.data.flatMap((item) => item[objectProp]);
}
export async function getStaticProps(resource, query) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json();
    return {props: {
        data:anime
    }}
}


export const getAnimeResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json();
    return anime;
}



export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {data: data.slice(first, last)};
    return response;
}

