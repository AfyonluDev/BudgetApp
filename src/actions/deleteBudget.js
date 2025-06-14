// rrd import
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    // löscht alle Ausgaben die im Budget enthalten sind, beim löschen des Budgets
    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget wurde erfolgreich gelöscht!");
  } catch (e) {
    throw new Error("Ein Problem ist aufgetreten beim lösches des Budgets.");
  }
  return redirect("/");
}
