class All {
    constructor (){
        this.text = [
            "If the only thing keeping a person decent is the expectation of divine reward then, brother, that person is a piece of shit. And I’d like to get as many of them out in the open as possible. You gotta get together and tell yourself stories that violate every law of the universe just to get through the goddamn day? What’s that say about your reality?",
        ];
        this.container = document.querySelector(".container");
        this.divHeader = document.querySelector(".div-header");
        this.select = document.querySelector("select");
        this.grabber() //this grap all episodes
    }
    typing(){
        let k = 0;
        for (let i=0;i<text.length;i++){
          function type(){
            if (k < text[i].length) {
              // console.log("i=",i)
              // console.log("k=",k)
            document.querySelector(".dialog-content").innerHTML += this.text[i].charAt(k);
            k++;
            setTimeout(type, 150);
            }
          }
           type();
        }
    }
    
    async grabber () {
        try {
            const res = await axios.get("https://api.tvmaze.com/shows/5/episodes")
            // const res = await axios.get("true.json");
            // console.log(res.data)
            const allEpisodes = res.data;
            this.creation(allEpisodes)
            // return allEpisodes.then(x=>x)
        } catch (err) {
            console.log(err);
          }
    };

    async eps (){
          select.name = "select";
          let option0 = document.createElement("option");
          option0.value = "all";
          option0.innerText = "please select what episode you want";
          select.append(option0);
          let option1 = document.createElement("option");
          option1.value = "all";
          option1.innerText = "All episodes";
          select.append(option1);
          // console.log(allepisode);
          for (one of this.allepisode) {
            // console.log(one)
            let option = document.createElement("option");
            option.value = one.name;
            option.innerText = `S0${one.season}E0${one.number} - ${one.name}`;
            select.append(option);
          }
    };

    creation(allEpisodes) {
        for (episode of allEpisodes) {
            //define card
            let div = document.createElement("div");
            div.classList.add("div-card");
            //   console.log(episode.image.medium);
            div.style.backgroundImage = `url(${episode.image.medium})`;
            div.style.backgroundSize = `cover`;
            //   div.style.margin= "1rem"
            container.append(div);
            let divNum = document.createElement("div");
            divNum.innerText = `S0${episode.season}E0${episode.number}`;
            divNum.classList.add("divNum");
            div.append(divNum);
            let divName = document.createElement("div");
            divName.innerText = episode.name;
            divName.classList.add("divName");
            div.append(divName);
            divSummary = document.createElement("div");
            divSummary.innerHTML = episode.summary;
            divSummary.classList.add("divSummary");
            div.append(divSummary);
            divScore = document.createElement("span");
            divScore.innerText = `${episode.rating.average}/10`;
            let a = document.createElement("a");
            a.href = episode.url;
            a.target="_blank"
            a.classList.add("a");
            divScore.classList.add("divScore");
            div.append(divScore);
            let icon = document.createElement("i");
            icon.classList.add("fas", "fa-play", "icon");
            a.append(icon);
            div.append(a);
            // console.log(episode)
        }
    }    
}

let main = new All()
main.grabber()
// console.log(aaa)
// console.log(main.grabber())
// console.log(main.creation(main.grabber()))
// main.select.addEventListener("click", (e) => {
//     document.querySelector("input").value=""
//     console.log(e.target.value);
//     if (e.target.value === "nothing") {
//       let divs = document.querySelectorAll(".div-card");
//       for (div of divs) {
//         div.remove();
//       }
//     } else if (e.target.value === "all") {
//       grabber(e.target.value);
//       // creation(allEpisodes);
//     } else {
//       let divs = document.querySelectorAll(".div-card");
//       for (div of divs) {
//         div.remove();
//       }
//       grabber(e.target.value);
//       console.log(e.target.value);
//     }
//   });
        