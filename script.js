let container = document.querySelector(".container")
let grabber = async () => {
    try {
        // const res = await axios.get("https://api.tvmaze.com/shows/5/episodes")
        const res = await axios.get("true.json")
        // console.log(res.data)
        allEpisodes = res.data
        for (episode of allEpisodes) {
            //define card
          let div = document.createElement("div");
          div.classList.add("div-card");
        //   console.log(episode.image.medium);
          div.style.backgroundImage = `url(${episode.image.medium})`;
          div.style.backgroundSize = `cover`;
        //   div.style.margin= "1rem"
          container.append(div);
          let divNum= document.createElement("div")
          divNum.innerText= `S0${episode.season}E0${episode.number}`
          divNum.classList.add("divNum");
          div.append(divNum)
          let divName= document.createElement("div")
          divName.innerText= episode.name
          divName.classList.add("divName")
          div.append(divName)
          divSummary= document.createElement("div")
          divSummary.innerHTML = episode.summary
          divSummary.classList.add("divSummary")
          div.append(divSummary)
        }
    } catch (err) {
        console.log(err)
    }
}
grabber()

// container.addEventListener("mousemove",(e)=>{
//     let summary = document.querySelectorAll(".divSummary")
//     console.dir(e.target)
//     if (e.target.className === "div-card") {
//         // console.dir(e.target.childNodes[2]);
//         e.target.childNodes[2].style.transition = "all ease 0.5";
//         e.target.childNodes[2].style.display="block"

//     } else if (e.target.className === "container") {
//             for (sum of summary) {
//               sum.style.display = "none";
//             }
//     }
// })

