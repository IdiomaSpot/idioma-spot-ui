import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ClassOffers from "./ClassOffers/ClassOffers";
import ClassSchedules from "./ClassSchedules/ClassSchedules";
import Payment from "./Payment/Payment";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useEffectOnce } from "../../../hooks/useEffectOnce";
import { changeContent } from "../../../context/features/student/studentSlice";
import { getMenuOption } from "../../../data/studentsMenu";

export default function Enrollment() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  useEffectOnce(() => {
    dispatch(changeContent(getMenuOption("my-classes")));
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "Clase",
      description: "Selecciona el tipo de clase de tu mayor interés",
      component: <ClassOffers handleNext={handleNext} />,
    },
    {
      label: "Horario",
      description:
        "Selecciona el horario que mejor se adapte a tus necesidades",
      component: <ClassSchedules handleNext={handleNext} />,
    },
    {
      label: "Inscríbete",
      description: "Completa tu proceso de inscripción",
      component: <Payment handleNext={handleNext} />,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>¡Listo!</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <p>{steps[activeStep].description}</p>

          <Box>{steps[activeStep].component}</Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Volver
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              {activeStep === steps.length - 1 ? "Confirmar" : ""}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}
