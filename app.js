document.addEventListener('DOMContentLoaded', function () {
    // Write your code here! Don't forget the above in later lessons.
    //#1
    var greeting = document.getElementById('greeting')
    greeting.innerHTML = 'Hello, World!'

    //#2
    var liList = document.getElementsByClassName('li')
    for (var i=0; i<liList.length; i++){
        liList[i].style.backgroundColor = "yellow"
    }

    //#3
    var imageTag = document.createElement("img")
    imageTag.src = 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif'
    greeting.appendChild(imageTag)
    
    //#4 Create and add a ul element to the end of the body with a class of "todo-items"
    var ulElement = document.createElement("ul")
    ulElement.className = "todo-items"
    document.body.appendChild(ulElement)

    //#5 Go through the array `['make coffee','eat donut','change diapers','drive to work']` and create an li element for each item e.g. `<li>make coffee</li>`
    var array = ['make coffee','eat donut','change diapers','drive to work']
    for (var element in array){
        var newElement = document.createElement("li")
        newElement.innerHTML = array[element]
        newElement.className = "todo-items"
        ulElement.appendChild(newElement)
    }
 

  })
