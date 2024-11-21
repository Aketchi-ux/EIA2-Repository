
namespace A03_Formular {

    export interface Column {
        Title: string;
        For: string;
        Date: string;
        Time: string;
        Comment: string;
        Status: string;
    }



    export let data: Column[] = [

        { Title: "Einkaufen", For: "Tim", Date: "2024-11-15", Time: "10:00", Comment: "Brot,Eis,Kaffe", Status: "1" },
        { Title: "Putzen", For: "Franz", Date: "2024-11-28", Time: "09:35", Comment: "Nur Staub putzen", Status: "2" }

    ]
}
