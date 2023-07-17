let company = {
    name: 'Bread',
    yearly_revenue: 15000,
    ceo: 'Colins',
    number_of_employees: 500

};

if(company.yearly_revenue >= 1000000){
    console.log( company['name'], company['yearly_revenue'], company['ceo'], company['number of employees']);
}else{
    console.log('keep pushing, you will get there');

}


let industry = {
    managers:[`Unise`, `Aja`, `Frank`, `Alise`]

}

let counter = 0;
while(counter < industry.length){
    console.log(industry[counter]);
    counter = counter + 1;
}
