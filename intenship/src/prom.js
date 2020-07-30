var ask=prompt("Are we there yet:");
while(ask!=" ")
{
if(ask=="yes" || ask=="yeah")
{
console.log("Yay,we finally made it!");
}
else if(ask!="yes" || ask!="yeah" )
{
ask=prompt("Are we there yet:");
}
}
