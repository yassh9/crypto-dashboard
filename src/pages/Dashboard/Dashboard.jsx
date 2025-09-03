import { Grid, GridItem } from "@chakra-ui/react"
import DashLayout from "../../components/DashLayout"
import Portfolio from "./Components/Portfolio"
import Price from "./Components/Price"
const Dashboard = () => {
  return (
    <>
      <DashLayout title="Dashboard" >
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
        >
          <GridItem colSpan={2}>
            <Portfolio />
          </GridItem>
          <GridItem colSpan={1}>
            <Price />
          </GridItem>

        </Grid>
      </DashLayout>


    </>
  )
}

export default Dashboard
