var numeros = 100;

for (var i= 1; i<= numeros; i++)
{
  if (i % 3 == 0)
  {
    document.write("Fizz");
  }
  else if (i % 5 == 0)
  {
    document.write("Buzz");
  }
  if (i % 3 !=0 && i % 5 !=0)
  {
    document.write(i);
  }
  document.write("<br />");
}
