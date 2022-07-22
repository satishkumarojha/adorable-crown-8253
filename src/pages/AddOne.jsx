import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Switch,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Addone.module.css";

const AddOne = () => {
  return (
    <div>
      <Box >
        <Stack
          direction="row"
          textAlign="center"
          className={styles.divfirstinside}
        >
          <Link to="/">
            <Button
              leftIcon={<ArrowLeftIcon />}
              className={styles.backbtn}
              borderRadius={"25px"}
            >
              Back
            </Button>
          </Link>
          <p1 className={styles.firstP}>Create New Event Type</p1>
          <Box>
            <FormControl display="flex" alignItems="center" marginTop={2}>
              <FormLabel htmlFor="email-alerts" mb="0">
                Your event type is
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
          </Box>
        </Stack>
      </Box>

      <Box className={styles.maindiv}>
        
      </Box>
    </div>
  );
};

export default AddOne;
