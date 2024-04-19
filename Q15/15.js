var guests_list = ['Hanni', 'Hyein', 'Danielle', 'Haerin', 'Minji'];
for (var i = 0; i < guests_list.length; i++) {
    console.log('Respected Idol: ' + guests_list[i] + '\n I am Inviting you On Dinner Tommorow . \n\n Thank You \n ');
}
var not_present = 'Minji';
var new_guest = 'BTS Park JIMIN';
guests_list[4] = new_guest;
for (var i = 0; i < guests_list.length; i++) {
    console.log('Respected Idol: ' + guests_list[i] + '\n I am Inviting you On Dinner Tommorow . \n\n Thank You\n ');
}
console.log("Mrs. ".concat(not_present, " will not coming Tomorrow in Dinner ."));
