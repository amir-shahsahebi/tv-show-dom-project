let allEpisodes = async () => {
    try {
        const res = await axios.get("https://api.tvmaze.com/shows/5/episodes")
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
    }
}
allEpisodes()