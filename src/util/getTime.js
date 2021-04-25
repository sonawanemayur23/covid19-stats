const getTime=(date)=>{
    var myDate = date;
    myDate = myDate.split("/");
    var year=myDate[2].split(" ");
    var time=year[1].split(":")
    var newDate = new Date( year[0], myDate[1] - 1, myDate[0],time[0], time[1], time[2] );
    return newDate.getTime();
}
export default getTime;