import { Text, View } from "react-native"
function ExpensesSummary({periodName}) {

  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0)

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.ToFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
