type footerData = {
    name:string,
    id:number,
    data:{
        id:number,
        name:string    
    }[]
}


export const FooterData :footerData[]= [
  {
    id:1,
    name: "Plataform",
    data: [
      {
        id: 1,
        name: "Overview",
      },
      {
        id: 2,
        name: "Features",
      },
      {
        id: 3,
        name: "About",
      },
      {
        id: 4,
        name: "Practice",
      },
      {
        id: 5,
        name: "Pricing",
      },
    ],
  },
  {
    id:2,
    name: "Help",
    data: [
      {
        id: 1,
        name: "Lorem, ipsum",
      },
      {
        id: 2,
        name: "Lorem, ipsum",
      },
      {
        id: 3,
        name: "Lorem, ipsum",
      },
      {
        id: 4,
        name: "Lorem, ipsum",
      },
      {
        id: 5,
        name: "Lorem, ipsum",
      },
    ],
  },
  {
    id:3,
    name: "Contacts",
    data: [
      {
        id: 1,
        name: "Alex - Overview",
      },
      {
        id: 2,
        name: "Daniel - Features",
      },
      {
        id: 3,
        name: "Juan - About",
      },
      {
        id: 4,
        name: "Pepe - Practice",
      },
      {
        id: 5,
        name: "Oscar - Pricing",
      },
    ],
  },
];
