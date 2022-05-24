import * as React from "react";
import axios from "axios";
import Button1 from "./Button";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import PaymentMethod from "./PaymentMethod";
import ContactInfo from "./Info";
import Paypal from "./Paypal";
import { requestBody, headers } from "../services/Momo";
const steps = [
  {
    label: "Chọn phương thức thanh toán",
    description: ["Paypal", "Momo", "Ship COD"],
  },
  {
    label: "Nhập thông tin liên hệ",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Thanh toán",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];
export default function DialogCart(props) {
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [method, useMethod] = React.useState("Paypal");
  const [success, setSuccess] = React.useState(false);
  const [momo, setMomo] = React.useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handMomoRequest = async () => {
    console.log(requestBody, headers);
    await axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://test-payment.momo.vn/v2/gateway/api/create",
        requestBody,
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(`statusCode: ${res.status}`);
        console.log(res.data);
        setMomo(res.data.payUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handStep = (step, index) => {
    if (index === 0 && activeStep === 0) {
      return (
        <Box>
          <PaymentMethod step={step} method={method} useMethod={useMethod} />
        </Box>
      );
    } else if (index === 1 && activeStep === 1) {
      return <ContactInfo />;
    } else if (index === 2 && method === "Paypal" && activeStep === 2) {
      return <Paypal setSuccess={setSuccess} totalPrice={props.totalPrice} />;
    } else if (index === 2 && method === "Momo" && activeStep === 2) {
      handMomoRequest();
      return (
        <Typography>
          Click <a href={momo}> here</a> to scan QR Code{" "}
        </Typography>
      );
    } else if (index === 2 && method === "Ship COD" && activeStep === 2) {
      return <Typography>Ship COD</Typography>;
    } else {
      return;
    }
  };

  return (
    <div>
      <Button1 variant="outlined" onClick={handleClickOpen}>
        Đặt hàng
      </Button1>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Vui lòng xác nhận thông tin và đặt hàng"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ maxWidth: 1000 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    {handStep(step, index)}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && success === true && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Bạn đã thanh toán thành công !</Typography>
              </Paper>
            )}
            {activeStep === steps.length && success === false && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  Bạn có thể kiểm tra lại đơn hàng và thanh toán{" "}
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Quay lại
                </Button>
              </Paper>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
