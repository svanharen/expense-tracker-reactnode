import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { useGlobalContext } from '../../context/globalContext'
import { Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
 } from 'chart.js'

 import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)



function Chart() {

    const {incomes, expenses} = useGlobalContext();

    const data = {
        labels: incomes.map((income) => {
            const {date} = income;
            return format(new Date(date), "MM/dd/yyyy");
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income;
                        return amount;
                    })
                ],
                backgroundColor: 'green',
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense;
                        return amount;
                    })
                ],
                backgroundColor: 'red',
            }
        ]
    }



  return (
    <ChartStyled>
        <Line data = {data} />
    </ChartStyled>
  )
}

const ChartStyled = styled.div`
    background-color: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: var(--primary-shadow); 
    border-radius: 20px;
    padding: 1rem;
    height: 100%;
    `;

export default Chart