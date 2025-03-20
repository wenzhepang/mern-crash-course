import { Button, CloseButton, Dialog, Portal, IconButton, Input} from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "../store/product";
import { useState } from "react";
import { Toaster, toaster } from "@/components/ui/toaster";
const DialogCard = ({product, onClose}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product || { name: '', price: '', image: '' });
    const { updateProduct } = useProductStore();
    const handleUpdatedProduct = async () => {
      
      const { success} = await updateProduct(product._id, updatedProduct);
      
      if(success){
      toaster.create({
        title: 'Product updated',
        description: 'Product updated successfully',
        status: 'success',
      })
      onClose();
    }
    }
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
      <IconButton
              colorScheme="blue"
              variant="ghost"
              _hover={{
                bg: "yellow.500",
                transform: "scale(1.2)",
              }}
            >
              <FaEdit />
            </IconButton>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title></Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
                <Input type="text" placeholder="Name" value={updatedProduct.name}  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })} />
                <Input type="number" placeholder="Price" value={updatedProduct.price}    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} />
                <Input type="text" placeholder="Image" value={updatedProduct.image}  onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })} />
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger >
              <Dialog.ActionTrigger asChild>
                <Button onClick={() => handleUpdatedProduct(product._id, updatedProduct)} >Save</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default DialogCard;