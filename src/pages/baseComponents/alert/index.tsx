import React, { useState } from 'react';
import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsAlert,
  BdsAlertHeader,
  BdsAlertBody,
  BdsAlertActions,
  BdsButton,
} from 'blip-ds/dist/blip-ds-react/components';

const Alert = () => {
  const [openComponent, setOpenComponent] = useState(false);
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Alert
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsButton
                id="5689-open"
                dataTest="open-alert"
                variant="primary"
                size="standard"
                onBdsClick={() => setOpenComponent(true)}
              >
                Abrir Alert
              </BdsButton>
              <BdsAlert open={openComponent} id="4185-alert" dataTest="should-alert">
                <BdsAlertHeader variant="system" icon="info">
                  Atenção!
                </BdsAlertHeader>
                <BdsAlertBody>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At corporis eligendi cumque ratione nulla a
                  quos error!
                </BdsAlertBody>
                <BdsAlertActions>
                  <BdsButton variant="tertiary" onBdsClick={() => setOpenComponent(false)}>
                    Cancelar
                  </BdsButton>
                  <BdsButton
                    id="4598-close"
                    dataTest="close-alert"
                    variant="primary"
                    onBdsClick={() => setOpenComponent(false)}
                  >
                    Confirmar
                  </BdsButton>
                </BdsAlertActions>
              </BdsAlert>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Alert;
