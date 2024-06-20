import PropTypes from "prop-types";
import { FcApproval, FcCancel } from "react-icons/fc";

const StatusContent = ({ status }) => {
  return (
    <>
      <h3>
        Su pago ha sido:
        <b>
          {status === "approved"
            ? " Exitoso"
            : status === null
            ? "Cancelado"
            : " Rechazado"}
        </b>
        {status === "approved" ? (
          <FcApproval size={22} />
        ) : (
          <FcCancel size={22} />
        )}
      </h3>
    </>
  );
};

StatusContent.propTypes = {
  status: PropTypes.string,
};
StatusContent.defaultProps = {
  status: "error",
};

export default StatusContent;
