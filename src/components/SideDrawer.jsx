 
 import { CloseButton, Drawer, Portal } from "@chakra-ui/react"
import SideNav from "./SideNav"

const SideDrawer = ({open , setOpen}) => {

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="left">
     
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body>
             <SideNav />
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" onClick={() => setOpen(false)} />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

  

export default SideDrawer
