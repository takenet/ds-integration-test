import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsNavbar,
  BdsNavbarContent,
  BdsButtonIcon,
} from 'blip-ds/dist/blip-ds-react/components';

const Input = () => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  const handleKeyCommand = (command: string, editorState: EditorState): 'handled' | 'not-handled' => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const getBlockStyle = (block: any): string => {
    switch (block.getType()) {
      case 'blockquote':
        return 'blockquote';
      default:
        return '';
    }
  };

  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Input
              </BdsTypo>
              <BdsTypo variant="fs-16">Os inputs são usados para que os usuários insiram e editem textos.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsPaper border class="w-100">
                <BdsNavbar backgroundColor="surface-2" orientation="horizontal">
                  <BdsNavbarContent>
                    <BdsButtonIcon
                      variant="secondary"
                      size="short"
                      color="content"
                      onBdsClick={() => toggleInlineStyle('BOLD')}
                      icon="text-style-bold"
                    ></BdsButtonIcon>
                    <BdsButtonIcon
                      variant="secondary"
                      size="short"
                      color="content"
                      onBdsClick={() => toggleInlineStyle('ITALIC')}
                      icon="text-style-italic"
                    ></BdsButtonIcon>
                    <BdsButtonIcon
                      variant="secondary"
                      size="short"
                      color="content"
                      onBdsClick={() => toggleInlineStyle('UNDERLINE')}
                      icon="text-style-underline"
                    ></BdsButtonIcon>
                    <BdsButtonIcon
                      variant="secondary"
                      size="short"
                      color="content"
                      onBdsClick={() => toggleBlockType('unordered-list-item')}
                      icon="list"
                    ></BdsButtonIcon>
                    <BdsButtonIcon
                      variant="secondary"
                      size="short"
                      color="content"
                      onBdsClick={() => toggleBlockType('ordered-list-item')}
                      icon="123"
                    ></BdsButtonIcon>
                    <BdsButtonIcon
                      variant="secondary"
                      size="short"
                      color="content"
                      onBdsClick={() => toggleBlockType('blockquote')}
                      icon="edit"
                    ></BdsButtonIcon>
                  </BdsNavbarContent>
                  <BdsNavbarContent>
                    <BdsButtonIcon size="short" icon="save-disk"></BdsButtonIcon>
                  </BdsNavbarContent>
                </BdsNavbar>
                <BdsGrid xxs="12" padding="2" direction="column" gap="2">
                  <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    handleKeyCommand={handleKeyCommand}
                    blockStyleFn={getBlockStyle}
                  />
                </BdsGrid>
              </BdsPaper>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Input;
