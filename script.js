let container = document.querySelector(".container")
let grabber = async () => {
    try {
        // const res = await axios.get("https://api.tvmaze.com/shows/5/episodes")
        const res = await axios.get("true.json")
        console.log(res.data)
        allEpisodes = res.data
        for (episode of allEpisodes) {
          let div = document.createElement("div");
          div.classList.add("div-card");
          console.log(episode.image.medium);
          div.style.backgroundImage = `url(${episode.image.medium})`;
          div.style.backgroundSize = `cover`;
          div.style.margin= "1rem"
          container.append(div);
        }
    } catch (err) {
        console.log(err)
    }
}
grabber()
