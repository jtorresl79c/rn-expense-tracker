import axios from "axios";

const BACKED_URL = 'https://react-native-course-79dce-default-rtdb.firebaseio.com'

export function storeExpense(expenseData) {
    axios.post(
        BACKED_URL + "/expenses.json",
        expenseData
    );
}

export async function fetchExpenses(){
    const response = axios.get(BACKED_URL + '/expenses.json')

    const expenses = []

    
    console.log(response.data)
    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }

        expenses.push(expenseObj)
    }

    return expenses;
}