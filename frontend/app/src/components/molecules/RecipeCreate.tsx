import { Modal, ModalBody, ModalFooter, ModalHeader } from '@yamada-ui/react';
import { useDisclosure, Box, Heading, Text ,Textarea, Input} from '@yamada-ui/react';
import { ActionButton } from '../atomo/ActionButton';
import { useState } from 'react';
import axios from 'axios';

export const RecipeCreate = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const createRecipe = async () => {
            await axios.post('http://localhost:4000/recipes', {
                recipe:{
                    title: title,
                    content: content
                },
            },{
                headers: {
                    'Content-Type': 'application/json',
            },}
            )
           onClose();
           
        }
    return(
        <>
        <ActionButton ButtonName="レシピ投稿" onClick={onOpen} />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalHeader>レシピ投稿</ModalHeader>
          <ModalBody>
                <Heading size="sm">タイトル</Heading>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />

                <Heading size="sm">内容</Heading>
                <Textarea autosize minRows={10}   value={content} onChange={(e) => setContent(e.target.value)} />
          </ModalBody>
          <ModalFooter>
          <ActionButton ButtonName="キャンセル" onClick={onClose} />
          <ActionButton ButtonName="投稿" onClick={createRecipe} />
          </ModalFooter>
        </Modal>
      </>

    )
}