/// bugs to fix
//"stores in stoage as undefined first then as a defined key"




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
    }}
    //push result object unto showresults array
  showResults.push(result)
 console.log(showResults)
  
  
  
    $("#resultsList").empty()
    $("#urlResultsList").empty()
    for (var i = 0; i < showResults.length; i++){
      console.log(showResults)
        titleBtn = $("<h1>")
        .addClass("paytone purp pt-3 mb-3 pl-3 is-size-2")
        .text(showResults[i].Atitle )
        titleBtn.attr("anime-search", searchAnime)
        titleBtn.attr("anime-index", i)
        titleDesc = $("<p>").addClass("oswald pl-3").text(showResults[i].Danime)
        titleRate =$('<p>').addClass('oswald pl-3').text(showResults[i].Arating)
        titleURL=$("<p>").addClass('oswald pl-3').text(showResults[i])
        listItem = $("<li>").addClass("mb-3")
        urlItem=$("<li>").addClass("mb-1")
        listItem.append(titleBtn)
        listItem.append(titleDesc)
        listItem.append(titleRate)
        urlItem.append(titleURL)
        
      

        ///
        $("#resultsList").append(listItem)
        $("#urlResultsList").append(urlItem)
        $("#showResultsDiv").removeClass("is-hidden")
        }})}

        //  $(".movieSel").on("click", function(){

          


        //  })
           
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
      
        
  

$("#submit").on('click',function(){
  event.preventDefault()
  
  $("#resultsList").empty()
  $("#urlResultsList").empty()
  var searchTerm=$("#searchBar").val().toLowerCase().trim().split(/\s+/).join('-')
sAnime(searchTerm)


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
Sanime(searchTerm)  

});




$("#titleSelect").html("<center>" + result[animeIndex].Atitle );
$("#picture").attr("iframe", results[animeIndex].YID);