import { Cross } from "lucide-react";
import { ReactNode } from "react";

export interface MainGoal {
    icon?: ReactNode,
    desc?: ReactNode | string
    heading?: ReactNode | string 
}

export const MainGoalsList: MainGoal[] = [
    {
        heading: 'Care company',
        desc: 'Carers can assist with personal care, meals, medication, and companionship (All care companies are CQC registered)',
        icon: <Cross />
    },
    {
        heading: 'Care company',
        desc: 'Carers can assist with personal care, meals, medication, and companionship (All care companies are CQC registered)',
        icon: <Cross />
    },
    {
        heading: 'Care company',
        desc: 'Carers can assist with personal care, meals, medication, and companionship (All care companies are CQC registered)',
        icon: <Cross />
    },
    {
        heading: 'Care company',
        desc: 'Carers can assist with personal care, meals, medication, and companionship (All care companies are CQC registered)',
        icon: <Cross />
    }
]