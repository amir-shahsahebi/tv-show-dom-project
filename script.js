let container = document.querySelector(".container")
let divHeader = document.querySelector(".div-header")
let select = document.querySelector("select");
let eps = async () => {
  try {
    let all = await axios.get("true.json");
    let allepisode = all.data
    
    select.name = "select";
    let option0 = document.createElement("option");
    option0.value = "nothing";
    option0.innerText = "please select witch you want";
    select.append(option0);
    let option1 = document.createElement("option");
    option1.value = "all";
    option1.innerText = "All episodes";
    select.append(option1);
    // console.log(allepisode);
    for (one of allepisode) {
      // console.log(one)  
      let option = document.createElement("option")
      option.value= one.name
      option.innerText = `S0${one.season}E0${one.number} - ${one.name}`;
      select.append(option)
    }
    // divHeader.append(select)
  }
   catch (err) {
    console.log(err)
  }
}
eps()
    
    // return all.date;
// let all = eps().then(data=>data)
// console.log(all);




let grabber = async () => {
    try {
        // const res = await axios.get("https://api.tvmaze.com/shows/5/episodes")
        const res = await axios.get("true.json")
        // console.log(res.data)
        allEpisodes = res.data
        creation(allEpisodes);
        // for (episode of allEpisodes) {
        //     //define card
        //   let div = document.createElement("div");
        //   div.classList.add("div-card");
        // //   console.log(episode.image.medium);
        //   div.style.backgroundImage = `url(${episode.image.medium})`;
        //   div.style.backgroundSize = `cover`;
        // //   div.style.margin= "1rem"
        //   container.append(div);
        //   let divNum= document.createElement("div")
        //   divNum.innerText= `S0${episode.season}E0${episode.number}`
        //   divNum.classList.add("divNum");
        //   div.append(divNum)
        //   let divName= document.createElement("div")
        //   divName.innerText= episode.name
        //   divName.classList.add("divName")
        //   div.append(divName)
        //   divSummary= document.createElement("div")
        //   divSummary.innerHTML = episode.summary
        //   divSummary.classList.add("divSummary")
        //   div.append(divSummary)
        //   divScore = document.createElement("span")
        //   divScore.innerText = `${episode.rating.average}/10`;
        //   let a = document.createElement("a")
        //   a.href=episode.url
        //   a.classList.add("a")
        //   divScore.classList.add("divScore")
        //   div.append(divScore)
        //   let icon = document.createElement("i")
        //   icon.classList.add("fas", "fa-play" , "icon");
        //   a.append(icon)
        //   div.append(a)
        //   // console.log(episode)
        // }
        let all= allEpisodes
        // console.log(all)
        let allFilter = all.filter(x=>x.name.includes("Long") || x.summary.includes("Long") )
        // console.log(allFilter)
    } catch (err) {
        console.log(err)
    }
}

function creation(allEpisodes) {
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
// grabber()
// let select = document.querySelector("select");
select.addEventListener("click", (e)=>{
  console.log(e.target.value);
  if (e.target.value === "all") {
    grabber();
  }
})

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

// for episode n & number m use this method:
// https://api.tvmaze.com/shows/5/episodebynumber?season=1&number=1
// number 5 is id of true detective

// for showing seasons we can use https://api.tvmaze.com/shows/5/seasons

