import { describe } from "node:test";
import { PricesPlansData } from "./PricesPlan.type";

export const PricesPlanData :PricesPlansData=[
    {
        id:1,
        name:"Started",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        primary:false,
        prices:[
            {
                id:1,
                name:"mes",
                price:'S/ 50'
            },
            {
                id:2,
                name:"anual",
                price:'S/ 550'
            }
        ],
        features:[
            {
                id:1,
                name:"Se envia email gratis",
                active:true
            },
            {
                id:2,
                name:"Registro gratuito.",
                active:true
            },
            {
                id:3,
                name:"Lorem, ipsum.",
                active:false
            },
            {
                id:4,
                name:"Lorem, ipsum.",
                active:false
            },
            {
                id:5,
                name:"Lorem, ipsum.",
                active:false
            }
        ]

    },
    {
        id:2,
        name:"Advance",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        primary:true,
        prices:[
            {
                id:1,
                name:"mes",
                price:'S/ 80'
            },
            {
                id:2,
                name:"anual",
                price:'S/ 550'
            }
        ],
        features:[
            {
                id:1,
                name:"Se envia email gratis",
                active:true
            },
            {
                id:2,
                name:"Registro gratuito.",
                active:true
            },
            {
                id:3,
                name:"Lorem, ipsum.",
                active:true
            },
            {
                id:4,
                name:"Lorem, ipsum.",
                active:false
            },
            {
                id:5,
                name:"Lorem, ipsum.",
                active:false
            }
        ]

    },
    {
        id:3,
        name:"Premium",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        primary:false,
        prices:[
            {
                id:1,
                name:"mes",
                price:'S/ 100'
            },
            {
                id:2,
                name:"anual",
                price:'S/ 550'
            }
        ],
        features:[
            {
                id:1,
                name:"Se envia email gratis",
                active:true
            },
            {
                id:2,
                name:"Registro gratuito.",
                active:true
            },
            {
                id:3,
                name:"Lorem, ipsum.",
                active:true
            },
            {
                id:4,
                name:"Lorem, ipsum.",
                active:true
            },
            {
                id:5,
                name:"Lorem, ipsum.",
                active:true
            }
        ]

    }
]