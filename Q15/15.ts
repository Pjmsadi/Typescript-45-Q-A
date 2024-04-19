let guests_list : string [] = ['Hanni','Hyein','Danielle', 'Haerin','Minji'];

for(let i=0; i<guests_list.length; i++)
{
console.log( 'Respected Idol: ' +  guests_list [i] +'\n I am Inviting you On Dinner Tommorow . \n\n Thank You \n ');
}

let not_present : string = 'Minji';
let new_guest : string = 'BTS Park JIMIN';

guests_list[4] = new_guest;
 
for(let i=0; i<guests_list.length; i++)
{
    console.log('Respected Idol: ' + guests_list [i] + '\n I am Inviting you On Dinner Tommorow . \n\n Thank You\n ')
}
 console.log(`Mrs. ${not_present} will not coming Tomorrow in Dinner .`);