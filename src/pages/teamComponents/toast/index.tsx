import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsButton } from 'blip-ds/dist/blip-ds-react/components';

const Toast = () => {
  const showToast = async () => {
    const newtoast = document.createElement('bds-toast');
    document.body.appendChild(newtoast);

    const icon = 'bell';
    const variant = 'system';
    const actionType = 'icon';
    const toastTitle = 'Toast de teste';
    const toastText = 'Esse é um toast para testes, podendo ser modificado na tabela.';
    const buttonAction = 'close';
    const dtButtonAction = 'should-button-action';
    const dtButtonClose = 'should-button-close';

    await newtoast.create({
      variant,
      actionType,
      toastTitle,
      buttonAction,
      toastText,
      icon,
      dtButtonAction,
      dtButtonClose,
    });
  };
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Toast
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsButton
                id="2178-should"
                variant="primary"
                size="standard"
                onBdsClick={() => showToast()}
                dataTest="should-button"
              >
                Abrir Toast
              </BdsButton>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Toast;
