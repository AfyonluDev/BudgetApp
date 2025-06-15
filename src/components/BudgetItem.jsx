// rrd imports
import { Form, Link } from "react-router-dom";


// bibliothek für zeichen auf dne Button
import { BanknotesIcon, TrashIcon, XCircleIcon, MinusCircleIcon , MagnifyingGlassIcon, DocumentTextIcon, EyeIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline"; 

// helper functions
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div
      className="budget"
      style={{
        "--accent": color,
      }}
    >
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Geplantes Budget</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} Ausgegeben</small>
        <small>{formatCurrency(amount - spent)} Verfügbar</small>
      </div>
      {showDelete ? (
        <div className="flex-sm">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Sind Sie sicher das Sie dieses Budget löschen möchten?"
                )
              ) {
                event.preventDefault(); // React methode
              }
            }}
          >
            <button type="submit" className="btn btn--pill">
              <span>Budget löschen</span>
              <XCircleIcon  width={20} />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-sm">
          <Link to={`/budget/${id}`} className="btn btn--pill">
            <span>Detail Ansicht</span>
            <MagnifyingGlassIcon width={20} />
          </Link>
        </div>
      )}
    </div>
  );
};
export default BudgetItem;