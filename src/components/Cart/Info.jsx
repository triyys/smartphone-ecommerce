import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";
export default function ContactInfo() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl required={true} variant="standard">
        <InputLabel>Tên</InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl required variant="standard">
        <InputLabel> Email </InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <AttachEmailIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl required variant="standard">
        <InputLabel> Số điện thoại </InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <ContactPhoneIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl required variant="standard">
        <InputLabel> Địa chỉ </InputLabel>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
