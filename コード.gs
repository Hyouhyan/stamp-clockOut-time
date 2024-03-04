const calendar = CalendarApp.getCalendarById('6jn0bhoia26rbctuvcordk9vgk@group.calendar.google.com');

function changeTime(endTime){
  let startDate = new Date();
  let endDate = new Date();

  console.log(endTime);

  let month = endTime.getMonth();
  let date = endTime.getDate();

  startDate.setMonth(month);
  startDate.setDate(date);
  startDate.setHours(0);
  startDate.setMinutes(0);

  endDate.setMonth(month);
  endDate.setDate(date);
  endDate.setHours(23);
  endDate.setMinutes(59);

  let events = calendar.getEvents(startDate, endDate);

  for(let i = 0; i < events.length; i++){
    var title = events[i].getTitle();
    var startTime = events[i].getStartTime();

    console.log(title);

    if(title == "バイト"){
      events[i].setTime(startTime, endTime);
    }
  }
}

function test(){
  let endTime = new Date();

  endTime.setMonth(2);
  endTime.setDate(15);
  endTime.setHours(20);
  endTime.setMinutes(26);

  changeTime(endTime);
}

function doGet(e){
  let endTime = new Date();

  if(e.parameter.month !== undefined){
    let month = e.parameter.month;
    month = month - 1;
    endTime.setMonth(month);
  }
  if(e.parameter.date !== undefined){
    let date = e.parameter.date;
    endTime.setDate(date);
  }

  let hours = e.parameter.hours;
  endTime.setHours(hours);
  let minutes = e.parameter.minutes;
  endTime.setMinutes(minutes);

  changeTime(endTime);
}