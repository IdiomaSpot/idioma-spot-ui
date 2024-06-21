import { Button } from "@mui/material";
import { useLocation, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import StatusContent from "./StatusContent/StatusContent";
import "./ProcessPayment.scss";

const ProcessPayment = () => {
  useLocation();
  const [searchParams] = useSearchParams();

  // Get Query Params from route
  const status = searchParams.get("status");

  return (
    <>
      <div>
        <StatusContent status={status} />

        <Button className="status-button" variant="contained">
          <Link className="button-text" to="/student/payment">
            IR MIS PAGOS
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ProcessPayment;
