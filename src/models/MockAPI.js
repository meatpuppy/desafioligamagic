import {Icons as i} from "../models/Icons"
import counterspell from "../../assets/counterspell.jpg"

export const CounterSpell =
    {
        name: "Contramágica",
        nameEnglish: "Counterspell",
        edition: [
            {
                name: "ed1",
                image: counterspell,
                number: "45",
                price:{
                    lowest: 10,
                    avarage: 20,
                    hightest: 30,
                }
            },{
                name: "ed2",
                image: counterspell,
                number: "45",
                price:{
                    lowest: 10,
                    avarage: 20,
                    hightest: 30,
                }
            },{
                name: "ed3",
                image: counterspell,
                number: "45",
                price:{
                    lowest: 10,
                    avarage: 20,
                    hightest: 30,
                }
            }
        ],
        color: "Azul",
        cost: [i.blue, i.blue],
        type: "instant",
    }