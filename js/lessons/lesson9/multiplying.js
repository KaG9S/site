document.write('<table id="multiplying">')
document.write('<thead>Multiplying!</thead>')
document.write('<tbody id="multbody">')
for(let x = 1; x <= 10; x++){
    document.write('<tr>');
    for(let y = 1; y <= 10; y++){
      document.write('<td>'+(x*y)+'</td>');
    }
    document.write('</tr>');
}
document.write('</tbody')
document.write('</table>')