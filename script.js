

async function apiFetch() {
    var url = "https://api.thingspeak.com/channels/1871016/feeds.json?api_key=QMPNNMEITXUI5O84&results=2";

    const response = await fetch(url);
    const data = await response.json();
    const feeds = data.feeds;
    // console.log(feeds);
    const field01 = feeds[0].field1;
    const field02 = feeds[0].field2; 
    const field11 = feeds[1].field1;
    const field12 = feeds[1].field2;

    if(field01 == 1 || field11 == 1) {
        document.getElementById("id1").style.backgroundColor = "#02d406";

    }
    else if(field01 == 0 || field11 == 0){
        document.getElementById("id1").style.backgroundColor = "red";
        }

        
    if(field02 == 1 || field12 == 1) {
        document.getElementById("id2").style.backgroundColor = "#02d406";
 
    } else if(field02 == 0 || field12 == 0){
        document.getElementById("id2").style.backgroundColor = "red";

    }

    console.log(data);
    
}

setInterval(apiFetch,2000);

