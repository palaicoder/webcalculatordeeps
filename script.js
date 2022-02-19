function Clickbtn(val)
{
    document.getElementById("result").value+=val;

}
function Clearbtn()
{
    document.getElementById("result").value="";
}
function resultBtn()
{
    var text= document.getElementById("result").value;
    var result= eval(text);
    document.getElementById("result").value=result;
}
