import { Grid, GridItem } from "@chakra-ui/react"
import DashLayout from "../../components/DashLayout"
import Portfolio from "./Components/Portfolio"
import Price from "./Components/Price"
import Transaction from "./Components/Transaction"
import InfoCard from "./Components/InfoCard"
const Dashboard = () => {
  return (
    <>
      <DashLayout title="Dashboard"  >
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap={{ base: 4, md: 6 }}
        >
          <GridItem colSpan={{ base: 1, xl: 2 }}>
            <Portfolio />
          </GridItem>
          <GridItem colSpan={1}>
            <Price />
          </GridItem>
          <GridItem colSpan={1}>
            <Transaction />
          </GridItem>
          <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans  Keep your Bitcoin, access its value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            tagText="Contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>

        </Grid>
      </DashLayout>


    </>
  )
}

export default Dashboard
