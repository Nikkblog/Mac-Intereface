
//battery
const BatteryLevel = document.querySelector(".setBatteryLevel");
navigator.getBattery().then((bat)=>{
    const setBatteryLevel = ()=>{
        const level = bat.level*100;
        BatteryLevel.textContent=level + "%";
    }
    setBatteryLevel();
    bat.ondischargingtimechange = () =>{
        setBatteryLevel();
    }
    bat.onchargingtimechange = () =>{
        setBatteryLevel();
    }
})
//date and time
setInterval(() =>{
    const time = document.querySelector(".time");
    const cmonth = document.querySelector(".cmonth");
    const cdate = document.querySelector(".cdate");
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let day_night = "AM";
    if(hours > 12){
        day_night = "PM";
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
    const date = document.querySelector(".date");
    let dname = d.getDay();
    let month = d.getMonth();
    let dnum = d.getDate();

    var months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    date.textContent = week[dname] + " " + dnum + " " + months[month] + " ";
   cmonth.textContent = months[month];
   cdate.textContent = dnum;
});


//menu bar
    // function finder(){
    //     var list = document.getElementById("finderlist");
    //     var finder = document.getElementById("finder");
            
    //     if(list.style.display == "none"){
    //         list.style.display = "block";
            
    //     }
    //     else {
    //         document.onclick = function(e){}

    //         list.style.display = "none";
          
    //     }
    // }


    //apple icon event
    const apple = document.querySelector("#apple");
    const applelist = document.querySelector("#applelist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'applelist' && e.target != 'apple'){
            apple.classList.remove('active');
            applelist.classList.remove('active');
        }   
    })
    apple.onclick = function(){
        apple.classList.toggle('active');
        applelist.classList.toggle('active');
    }

    //finder event
    const finder = document.querySelector("#finder");
    const finderlist = document.querySelector("#finderlist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'finderlist' && e.target != 'finder'){
            finder.classList.remove('active');
            finderlist.classList.remove('active');
        }   
    })
    finder.onclick = function(){
        finder.classList.toggle('active');
        finderlist.classList.toggle('active');
    }


    //file event
    const file = document.querySelector("#file");
    const filelist = document.querySelector("#filelist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'filelist' && e.target != 'file'){
            file.classList.remove('active');
            filelist.classList.remove('active');
        }   
    })
    file.onclick = function(){
        file.classList.toggle('active');
        filelist.classList.toggle('active');
    }

    //edit event
    const edit = document.querySelector("#edit");
    const editlist = document.querySelector("#editlist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'editlist' && e.target != 'edit'){
            edit.classList.remove('active');
            editlist.classList.remove('active');
        }   
    })
    edit.onclick = function(){
        edit.classList.toggle('active');
        editlist.classList.toggle('active');
    }

    //view
    const view = document.querySelector("#view");
    const viewlist = document.querySelector("#viewlist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'viewlist' && e.target != 'view'){
            view.classList.remove('active');
            viewlist.classList.remove('active');
        }   
    })
    view.onclick = function(){
        view.classList.toggle('active');
        viewlist.classList.toggle('active');
    }

    //go event
    const go = document.querySelector("#go");
    const golist = document.querySelector("#golist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'golist' && e.target != 'go'){
            go.classList.remove('active');
            golist.classList.remove('active');
        }   
    })
    go.onclick = function(){
        go.classList.toggle('active');
        golist.classList.toggle('active');
    }

    //window event
    const windo = document.querySelector("#windo");
    const windolist = document.querySelector("#windolist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'windolist' && e.target != 'windo'){
            windo.classList.remove('active');
            windolist.classList.remove('active');
        }   
    })
    windo.onclick = function(){
        windo.classList.toggle('active');
        windolist.classList.toggle('active');
    }

    //help event
    const help = document.querySelector("#help");
    const helplist = document.querySelector("#helplist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'helplist' && e.target != 'help'){
            help.classList.remove('active');
            helplist.classList.remove('active');
        }   
    })
    help.onclick = function(){
        help.classList.toggle('active');
        helplist.classList.toggle('active');
    }

    //siri
    const siri = document.querySelector("#siri");
    const sirilist = document.querySelector("#sirilist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'sirilist' && e.target != 'siri'){
            siri.classList.remove('active');
            sirilist.classList.remove('active');
        }   
    })
    siri.onclick = function(){
        siri.classList.toggle('active');
        sirilist.classList.toggle('active');
    }

    //search
    const searcg = document.querySelector("#search");
    const searchlist = document.querySelector("#searchlist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'searchlist' && e.target != 'search'){
            search.classList.remove('active');
            searchlist.classList.remove('active');
        }   
    })
    search.onclick = function(){
        search.classList.toggle('active');
        searchlist.classList.toggle('active');
    }

    //battery
    const battery = document.querySelector("#battery");
    const batterylist = document.querySelector("#batterylist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'batterylist' && e.target != 'battery'){
            battery.classList.remove('active');
            batterylist.classList.remove('active');
        }   
    })
    battery.onclick = function(){
        battery.classList.toggle('active');
        batterylist.classList.toggle('active');
    }

    //user
    const user = document.querySelector("#user");
    const userlist = document.querySelector("#userlist");
    window.addEventListener('mouseup', function(e){

        if(e.target != 'userlist' && e.target != 'user'){
            user.classList.remove('active');
            userlist.classList.remove('active');
        }   
    })
    user.onclick = function(){
        user.classList.toggle('active');
        userlist.classList.toggle('active');
    }