let table="<table border='1'>";
i=1;
j=2;
while (i<10){
    table=table+"<tr>";
    while(j<=9){
        table=table + "<td>" + j+ "x" + i +"=" + i*j+ "</td>";
        j++;
    }
    table=table + "</tr>";
    j = 2;
    i++;
}
table=table+"</table>";
document.write(table);
