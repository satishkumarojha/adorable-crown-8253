import { Button,Box,Heading,Image} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/indivduals.module.css";
import img1 from "../images/img4.png";
import img5 from "../images/img5.png";
import Card from "./Card";
import video from "../images/videomet1.mp4";

const Indiviuals = () => {
  return (
    <Box mt={104.5}>
      <Box className={styles.div1}>
        <Box className={styles.div2}>
          <Heading size='3xl'className={styles.h1size}>
            The genius way to <br />
            work <span className={styles.em}> better </span>
          </Heading>

          <Box className={styles.p1}>
            <p>
              Calendly makes it easy to work smarter
              <br /> when you’re working solo. Meetings,
              <br /> sessions, and appointments become <br />
              more efficient ways to achieve success
              <br /> and accomplish goals.
            </p>
          </Box>

          <Button
            bg={"#006bff"}
            size="lg"
            borderRadius={"25px"}
            color="white"
            marginTop={"10%"}
            textAlign="center"
            marginLeft={"2%"}
          >
            Sign up for free
          </Button>
        </Box>

        <Box className={styles.div3}>
          <Image
            src="https://images.ctfassets.net/k0lk9kiuza3o/2kiAGfjL7zawukKEtUekPZ/e9808f922920947d64e0ffe4fbf18a45/Calendly-Individuals-Hero.png?w=1080&h=904&q=50&fm=webp"
            alt=""
            className={styles.Image1}
          />
        </Box>
      </Box>
      {/* ///////// */}

      <Box className={styles.div1}>
        <Box className={styles.div3}>
          <Image
            src="https://images.ctfassets.net/k0lk9kiuza3o/5vhSCmOfTG8ByGSTZiggcw/7c024b62e0421989e268bee66315ae2c/Calendly-Stay-in-Context.png?w=1140&h=940&q=50&fm=webp"
            alt=""
            className={styles.Image1}
          />
        </Box>

        <Box className={styles.box2div2}>
          <h1 className={styles.box2h1}>A CURATED CALENDAR</h1>
          <Heading className={styles.box2h1size}>The genius way to</Heading>

          <Box className={styles.p1}>
            <p>
              When invitees select a meeting slot from your schedule,
              <br /> they only see the times you’re available, and only the{" "}
              <br /> length and type of meeting you want to have. Your <br />{" "}
              schedule fills up efficiently, and everyone avoids excess <br />{" "}
              email exchanges.
            </p>
          </Box>

          <Box className={styles.box2a}>
            <a href="/">Learn More </a>
          </Box>
        </Box>
      </Box>
      {/* /////////3 */}
      <Box className={styles.div1}>
        <Box className={styles.div2}>
          <h1 className={styles.box2h1}>
            AUTOMATED NOTIFICATIONS & FOLLOW-UPS
          </h1>
          <Heading className={styles.box2h1size}>
            Work like you have a personal assistant
          </Heading>

          <Box className={styles.p1}>
            <p>
              Because Calendly automates administrative tasks like
              <br /> sending reminder emails and follow-ups, you can focus on{" "}
              <br />
              the work that builds your business and brings customers
              <br /> back for more.
            </p>
          </Box>

          <Box className={styles.box2a}>
            <a href="/">Learn More </a>
          </Box>
        </Box>

        <Box className={styles.div3}>
          <Image
            src="https://images.ctfassets.net/k0lk9kiuza3o/4VfIvpAjtQ0KxDLJzcNoGB/3fddd7c61713dcd58723cfe3fc2ba6c2/Calendly-Improve-Attendance.png?w=1140&h=930&q=50&fm=webp"
            alt=""
            className={styles.Image1}
          />
        </Box>
      </Box>
      {/* /////////4 */}
      <Box className={styles.div1}>
        <Box className={styles.div3}>
          <Image
            src="https://images.ctfassets.net/k0lk9kiuza3o/7uPSssDvEoeAqpvJonZ9ZP/f599af0836e6902e11528fb49569c5da/Calendly-Collect-Payments.png?w=1159&h=959&q=50&fm=webp"
            alt=""
            className={styles.Image1}
          />
        </Box>

        <Box className={styles.box2div2}>
          <h1 className={styles.box2h1}>COLLECT PAYMENTS</h1>
          <Heading className={styles.box2h1size}>Erase billing hassles</Heading>

          <Box className={styles.p1}>
            <p>
              Stripe and PayPal integrations enable your clients to
              <br /> submit payment as soon as they schedule a meeting. You{" "}
              <br />
              get paid on time, every time, without dealing with bills or
              <br /> invoices.
            </p>
          </Box>

          <Box className={styles.box2a}>
            <a href="/">Learn More </a>
          </Box>
        </Box>
      </Box>
      {/* /////////5 */}
      <Box className={styles.div1}>
        <Box className={styles.div2}>
          <h1 className={styles.box2h1}>SCHEDULING AT SCALE</h1>
          <Heading className={styles.box2h1size}>Retain more clients</Heading>

          <Box className={styles.p1}>
            <p>
              Happy clients are long-term clients. With Calendly,
              <br /> prospects can schedule with you instantly so no one slips{" "}
              <br />
              through the cracks, and everything about your interaction
              <br /> is personal, professional, and respectful of their time.
            </p>
          </Box>

          <Box className={styles.box2a}>
            <a href="/">Learn More </a>
          </Box>
        </Box>

        <Box className={styles.div3}>
          <Image
            src="https://images.ctfassets.net/k0lk9kiuza3o/7dAOGwsgnRjDgfFvLzJTgj/851a9a4c76d6416db169143b46b9d656/Calendly-clients__1_.png?w=1140&h=930&q=50&fm=webp"
            alt=""
            className={styles.Image1}
          />
        </Box>
      </Box>

      {/*box */}

      <Box className={styles.h1btn2}>
        <h1 className={styles.DoMore}>Do more with our integrations</h1>

        <h3 className={styles.Smart}>
          Smart scheduling will change the way you – and your tools – work
        </h3>

        <Box className={styles.Smartbtn}>
          <button className={styles.btn1}>View</button>
          <button className={styles.btn2}>Start for free</button>
        </Box>
      </Box>

      {/* video */}
      <Box>
        <Box className={styles.divgrid}>
          <h1 className={styles.box2h1}>HOW IT WORKS</h1>
          <br />
          <Heading className={styles.box2h1size}>See Calendly in action</Heading>
          <h3 className={styles.Smart}>
            With scheduling hassles and interruptions gone, your day is cleared
            for accomplishment.
          </h3>
        </Box>
        <br />

        <Box
          as="video"
          controls
          src={video}
          poster="https://images.ctfassets.net/k0lk9kiuza3o/52tqpJSZX1wfBDEQ6U2eV5/6ea00d6bb255dcc716a8794e1e25ed26/Image.jpg"
          alt="Big Buck Bunny"
          objectFit="contain"
          width="60%"
          margin={"auto"}
          borderRadius="25px"
        />
      </Box>

      {/* ///////// */}

      <Box className={styles.divgrid}>
        <h1 className={styles.box2h1}>FEATURES</h1>
        <br />
        <Heading className={styles.box2h1size}>
          Favorite features and capabilities
        </Heading>
      </Box>

      <Image src={img1} alt="" srcSet="" className={styles.imgbevideo1} />

      <Image src={img5} alt="" srcSet="" className={styles.imgbevideo1} />

      {/* Grid cards */}

      <Box className={styles.divgrid}>
        <h1 className={styles.box2h1}>SOLUTIONS</h1>
        <br />
        <br />
        <Heading className={styles.box2h1size}>
          The right Calendly for the work you do
        </Heading>
      </Box>

      <Card />

      {/* titile and btn */}

      <Box className={styles.div7}>
        <Heading className={styles.div7h1}>Try Calendly free</Heading>
        <p className={styles.Smart}>
          After your 14-day trial of our Teams pla, enjoy the Free version of
          Calendly-forever.
        </p>
        <br />
        <button className={styles.btn1}>Start for free</button>
        <p className={styles.Smart}>
          To inquire about our Enterprise plans, click{" "}
          <a href="/" className={styles.em}>
            here
          </a>
        </p>
      </Box>
    </Box>
  );
};

export default Indiviuals;