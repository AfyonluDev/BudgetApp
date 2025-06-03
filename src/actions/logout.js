// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

//Nach dem logout sollen die userName, budgets und ausgaben gelöscht werden
export async function logoutAction() {
  deleteItem({
    key: "userName"
  })
  deleteItem({
    key: "budgets"
  })
  deleteItem({
    key: "expenses"
  })
  toast.success("You’ve deleted your account!")
  // return redirect
  return redirect("/")
}