/// bugs to fix
/// has to use "-" in between spaces "cowboy-bebop"
//"stores in stoage as undefined first then as a defined key"
// using the (this).attr to color in with the OMDB API id challenging do to 
// the first bug above "bleach" for example will work but cowboy bebop will not 
// do to the space issue




function sAnime(searchAnime){
  
  
$.ajax({
    url:"https://kitsu.io/api/edge/anime?include=streamingLinks&filter[slug]="+searchAnime,
    method:"GET"
  }).then(function(response){
    //console.log(response)
    //list to stopre results 
  showResults=[]
  //come back to this
   //this will grab the streaming links maybe I need another loop to grab URL arry for now grab one 
    for(var i=0;i<response.included.length;i++) {
    //console.log(response.included[i].attributes.url)
    var streams=(response.included[i].attributes.url)
    console.log(streams)
    showResults.push(streams)
    console.log(showResults)
        //displaying ther service
   
//loop for the attributes another loop to grab ratting title synopsis and youtube vid
    }for(var i=0;i<response.data.length;i++){
      //console.log(response.data[i].attributes.ageRating)
      //create an object called result
      result={
      //var for the rating
      "Arating":response.data[i].attributes.ageRating,
      //var fot the title
      "Atitle":response.data[i].attributes.canonicalTitle,
      //var fot the description
      "Danime":response.data[i].attributes.synopsis,
      "YID":response.data[i].attributes.youtubeVideoId,
      "Ranime":response.data[i].attributes.popularityRank,
      "Ganime":response.data[i].attributes.showType,
      "Sanime":response.data[i].attributes.startDate,
      "Lanime":response.data[i].attributes.totalLength

      
  //result bracket
    }
    //push result object unto showresults array
  showResults.push(result)
  
  //console.log(result)
  //console.log(streams)
  //show results push (streaming service)????
   //loop bracket 
  }
  localStorage.clear()
  localStorage.setItem("key", JSON.stringify(showResults))
  
  }
    )}
  
  //push your show results into results
  //

// create a functio nto siplay the results 
function displayTitleResults(searchAnime){
    results = JSON.parse(localStorage.getItem('key'))
    
    console.log(results)
    $("#resultsList").empty()
    for (var i = 0; i < results.length; i++){
        titleBtn = $("<button>").addClass("button has-text-white paytone pborder mb-1 ml-3 movieSel").text(results[i].Atitle )
        titleBtn.attr("anime-search", searchAnime)
        titleBtn.attr("anime-index", i)
        titleDesc = $("<p>").addClass("oswald pl-3").text(results[i].Danime)
        titleRate =$('<p>').addClass('oswald pl-3').text(results[i].Arating)
        titleURL=$("<p>").addClass('oswald pl-3').text(results[i])
        listItem = $("<li>").addClass("mb-3")
        urlItem=$("<li>").addClass("mb-1")
        listItem.append(titleBtn)
        listItem.append(titleDesc)
        listItem.append(titleRate)
        urlItem.append(titleURL)
        
      

        ///
        $("#resultsList").append(listItem)
        $("#resultsList").append(urlItem)
        $("#showResultsDiv").removeClass("is-hidden")
        }

        //  $(".movieSel").on("click", function(){
           
        //     $("#yourServices").empty()
        //     animeSearch = $(this).attr("anime-search")
        //     console.log($(this))
        //     result = JSON.parse(localStorage.getItem(animeSearch))
        //     console.log(results)
        //     animeIndex = $(this).attr("anime-index")
        //     $("#showInfoDiv").removeClass("is-hidden");
        //     $("#titleSelect").text(results[animeIndex].Atitle);
        //     // $("#titleSelect").html("<center>" + results[animeIndex].title );
        //     // $("#picture").attr("src", results[animeIndex].picture);
        //     $("#selectGenre").text(results[animeIndex].Ganime);
        //     $('#selectActors').text(results[animeIndex].Ranime);
        //     $("#selectDesc").text(results[animeIndex].Danime);
        //     //$("#picture").attr(results[animeIndex].YID)
        //     $("#selectRuntime").text(results[animeIndex].Sanime);
        //     console.log(results[animeIndex])
        //     $("#yourServices").append(result);
                 //create an element to hold Streaming serive
        
                // if myServicesList contans service append to #yourServices
                // else append to #otherServices
      
        }
  

$("#submit").on('click',function(){
  event.preventDefault()
  
  $("#resultsList").empty()
  var searchTerm=$("#searchBar").val().toLowerCase().trim().split(/\s+/).join('-')
  
  const promise1 = new Promise((resolve, reject) => {
    resolve(sAnime(searchTerm));
  })
  promise1.then(() => {
  displayTitleResults(searchTerm);
    
  });

// with out promise 
// sAnime(searchTerm)
// displayTitleResults(searchTerm)

})

$("#searchBar").keyup(function(event) { 
  event.preventDefault()
  if (event.keyCode === 13) { 
      $("#submit").click(); 
  } 
}); 

$("#submit").click(function() { 
  event.preventDefault()
  
  $("#resultsList").empty()
  var searchTerm=$("#searchBar").val().toLowerCase().trim().split(/\s+/).join('-')
  
  const promise1 = new Promise((resolve, reject) => {
    resolve(sAnime(searchTerm));
  })
  promise1.then(() => {
  displayTitleResults(searchTerm);
    
  });
});




$("#titleSelect").html("<center>" + result[animeIndex].Atitle );
$("#picture").attr("iframe", results[animeIndex].YID);