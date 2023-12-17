 base_url_img="https://image.tmdb.org/t/p/original"


const getmovie=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=f5dbad5951c2922f7254e61a094eb629")
    base_url_img="https://image.tmdb.org/t/p/original"
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer.innerHTML+=`
               <div class="col" > 
                <div class="card" style="height:240px;width:280px;background-color:#181818">
                <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
                    <div class="card-body p-4">
                        <div class="text-center">
                            <span style="color:white;"> ${item.title} </span>
                      </div>
                    </div>
                </div>
            </div>`
    })
}

 getmovie()

 const getmovie2=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/discover/tv?api_key=f5dbad5951c2922f7254e61a094eb629&with_networks=213")
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer1.innerHTML+=`
               <div class="col" > 
                <div class="card" style="height:240px;width:280px;background-color:#181818">
                <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
                <div class="card-body p-4">
                        <div class="text-center">
                            <span style="color:white;"> ${item.original_name} </span>
                      </div>
                    </div>
                </div>
            </div>`
    })
}

 getmovie2()

 const getmovie3=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f5dbad5951c2922f7254e61a094eb629&language=en-US")
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer2.innerHTML+=`
        <div class="col" > 
        <div class="card" style="height:240px;width:280px;background-color: #181818;">
        <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
        <div class="card-body p-4">
                <div class="text-center">
                    <span style="color:white;"> ${item.title} </span>
              </div>
            </div>
        </div>
    </div>`
    })
}

 getmovie3()

 const getmovie4=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=28")
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer3.innerHTML+=`
        <div class="col" > 
        <div class="card" style="height:240px;width:280px;background-color:#181818">
        <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
        <div class="card-body p-4">
                <div class="text-center">
                    <span style="color:white;"> ${item.title} </span>
              </div>
            </div>
        </div>
    </div>`
    })
}

 getmovie4()


 const getmovie5=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=35")
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer4.innerHTML+=`
        <div class="col" > 
        <div class="card" style="height:240px;width:280px;background-color:#181818">
        <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
        <div class="card-body p-4">
                <div class="text-center">
                    <span style="color:white;"> ${item.title} </span>
              </div>
            </div>
        </div>
    </div>`
    })
}

 getmovie5()

 const getmovie6=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=27")
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer5.innerHTML+=`
        <div class="col" > 
        <div class="card" style="height:240px;width:280px;background-color:#181818;">
        <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
        <div class="card-body p-4">
                <div class="text-center">
                    <span style="color:white;"> ${item.title} </span>
              </div>
            </div>
        </div>
    </div>`
    })
}

 getmovie6()

 const getmovie7=async ()=>{
    result=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f5dbad5951c2922f7254e61a094eb629&with_genres=10749")
    allmov=result.json()
    allmovies=await allmov
    console.log(allmovies)
    allmoviesa=allmovies.results
    allmoviesa.forEach(item=>{
        filmcontainer6.innerHTML+=`
        <div class="col" > 
        <div class="card" style="height:240px;width:280px;background-color:#181818">
        <a href=""><img class="card-img-top" src="${base_url_img}${item.backdrop_path}" alt="..." style="height:200px"/></a>
        <div class="card-body p-4">
                <div class="text-center">
                    <span style="color:white;"> ${item.title} </span>
              </div>
            </div>
        </div>
    </div>`
    })
}

 getmovie7()



