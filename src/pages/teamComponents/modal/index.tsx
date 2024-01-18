import React, { useState } from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsModal, BdsModalAction, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

const Modal = () => {
  const [openComponent, setOpenComponent] = useState(false);
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Modal
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsButton variant="primary" size="standard" onBdsClick={() => setOpenComponent(!openComponent)}>
                Abrir Modal
              </BdsButton>
              <BdsModal open={openComponent} outzone-close={true} close-button={true}>
                <BdsTypo variant="fs-14" bold="regular">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </BdsTypo>
                <BdsModalAction>
                  <BdsGrid gap="1" justifyContent="flex-end" class="w-100">
                    <BdsButton icon="video" variant="secondary" onBdsClick={() => setOpenComponent(!openComponent)}>
                      Tutorial
                    </BdsButton>
                    <BdsButton onBdsClick={() => setOpenComponent(!openComponent)}>Ok, entendi</BdsButton>
                  </BdsGrid>
                </BdsModalAction>
              </BdsModal>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Modal;
