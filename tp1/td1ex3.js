//ex
const t=[10,12,3,10,7]

const[a,b]=t;
console.log(a);
console.log(b);

const[a1,b1,c1]=t;
console.log(a1);
console.log(b1);
console.log(c1);

const[a2,b2]=t
console.log(a2);
console.log(b2);


//
const produit={id:1,
               nom:"souris",
               prix:20,
               stock:15
};

//const{nom, prix}=produit;
//console.log(nom, prix);

//const{nom: designation, prix}= produit;
//console.log(designation, prix);



const panier =[{id:1,
                nom:"souris",
                prix:20,
                stock:15
            },
              { id:3,
                nom:"ecran",
                prix:350,
                stock:10
              }];
const nomprix=panier.map(({nom,prix})=>({nom , prix}));
console.log(nomprix);          



