 
 import { CloseButton, Drawer, Portal } from "@chakra-ui/react"
import SideNav from "./SideNav"

const SideDrawer = ({open , setOpen}) => {

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="left">
     
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxW="14rem">
            <Drawer.Body p={0}>
             <SideNav onClose={() => setOpen(false)} isCollapsed={false} />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

  

export default SideDrawer
