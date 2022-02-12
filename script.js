let container = document.querySelector(".container")
let grabber = async () => {
    try {
        const res = await axios.get("https://api.tvmaze.com/shows/5/episodes")
        console.log(res.data)
        allEpisodes = res.data
        for (episode of allEpisodes) {
          let div = document.createElement("div");
          div.classList.add("div-card");
          console.log(episode.image.medium);
          div.style.backgroundImage = `url(${episode.image.medium})`;
          container.append(div);
        }
    } catch (err) {
        console.log(err)
    }
}
grabber()
