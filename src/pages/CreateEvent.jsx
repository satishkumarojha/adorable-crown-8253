import {
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Create.module.css";

const CreateEvent = () => {
  return (
    <div className={styles.divfirst}>
      <div className={styles.divsecond}>
        <Box>
          <Stack
            direction="row"
            spacing={4}
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
          </Stack>
        </Box>

        {/* fiestflexbox */}
        <Flex>
          <Box className={styles.secondflex}>
            <Box display={"flex"} gap={10}>
              <img
                src="https://assets.calendly.com/packs/frontend/media/one_on_one-6206433649431f0b4804.svg"
                alt=""
                srcset=""
                width={80}
              />
              <Box
                marginLeft={5}
                margin={"auto"}
                className={styles.secondinsidebox}
              >
                <h1>One-on-One</h1>
                <p>Let an invitee pick a time to meet with you.</p>
              </Box>
            </Box>
            <Link to="/addone">
            <button className={styles.createbtn}>Create</button></Link>
          </Box>
        </Flex>

        {/* secondflexbox */}
        <Flex>
          <Box className={styles.secondflex}>
            <Box display={"flex"} gap={10}>
              <img
                src="https://assets.calendly.com/packs/frontend/media/group-7eac5d967740a9799590.svg"
                alt=""
                srcset=""
                width={80}
              />
              <Box
                marginLeft={5}
                margin={"auto"}
                className={styles.secondinsidebox}
              >
                <h1>One-on-One</h1>
                <p>Let an invitee pick a time to meet with you.</p>
              </Box>
            </Box>
            <button className={styles.createbtn}>Create</button>
          </Box>
        </Flex>

        {/* midflexbox */}
        <Flex className={styles.midflex1}>
          <Box className={styles.midflex}>
            <Box className={styles.midflex3}>
              <h1>
                {" "}
                <span className={styles.h1withbold}>
                  Want to host shared events with others?
                </span>{" "}
                Add members to your account
              </h1>
            </Box>
            <Button className={styles.backbtn2} borderRadius={"25px"}>
              Invite members
            </Button>
          </Box>
        </Flex>
        {/* midflexbox */}

        {/* therdflexbox */}
        <Flex>
          <Box className={styles.secondflex}>
            <Box display={"flex"} gap={10} color={"grey"}>
              <img
                src="https://assets.calendly.com/packs/frontend/media/collective-4e201a8dd006b0d78f95.svg"
                alt=""
                srcset=""
                width={80}
              />
              <Box
                marginLeft={5}
                margin={"auto"}
                className={styles.secondinsidebox}
              >
                <h1>One-on-One</h1>
                <p>Let an invitee pick a time to meet with you.</p>
              </Box>
            </Box>
            <button className={styles.createbtn2}>Create</button>
          </Box>
        </Flex>

        {/* forthflexbox */}
        <Flex>
          <Box className={styles.secondflex}>
            <Box display={"flex"} gap={10} color={"grey"}>
              <img
                src="https://assets.calendly.com/packs/frontend/media/round_robin-310498d275de8c1f7e4a.svg"
                alt=""
                srcset=""
                width={80}
              />
              <Box
                marginLeft={5}
                margin={"auto"}
                className={styles.secondinsidebox}
              >
                <h1>One-on-One</h1>
                <p>Let an invitee pick a time to meet with you.</p>
              </Box>
            </Box>
            <button className={styles.createbtn2}>Create</button>
          </Box>
        </Flex>

        <Box>
          <h1 className={styles.boldh1}>More ways to meet</h1>
          <Box className={styles.flexBoxlast}>
            <Box className={styles.flexBoxlast1}>
              <Box className={styles.flexBoxlast2}>
                <Image
                  src="https://bookingkit.com/wp-content/uploads/2021/07/sell-more.svg"
                  alt=""
                  srcset=""
                  width={10}
                />
                <br />
                <h1>One-off meeting</h1>
                <p>Invite someone to pick a time to meet with you.</p>
                <br />
                <br />
                <Button className={styles.backbtn} borderRadius={"25px"}>
                  Create
                </Button>
              </Box>
            </Box>

            <Box className={styles.flexBoxlast1}>
              <Box className={styles.flexBoxlast2}>
                <Image
                  src="https://www.pearson.com/uk/content/dam/one-dot-com/one-dot-com/english/Images/Benchmark-test-icon-150px.png.transform/big-size-xl/img.png"
                  alt=""
                  srcset=""
                  width={10}
                />
                <br />
                <h1>Meeting poll</h1>
                <p>Schedule a group meeting after offering times for a vote.</p>
                <br />
                <Button className={styles.backbtn} borderRadius={"25px"}>
                  Create
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default CreateEvent;