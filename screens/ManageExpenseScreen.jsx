import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense"
      });
  },[navigation, isEditing])


  return <Text>ManageExpenseScreen</Text>;
}

export default ManageExpenseScreen;
