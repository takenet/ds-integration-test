import React from 'react';
import {
  BdsGrid,
  BdsPaper,
  BdsTypo,
  BdsCard,
  BdsCardHeader,
  BdsCardTitle,
  BdsCardBody,
  BdsIcon,
  BdsCardFooter,
  BdsButton,
} from 'blip-ds/dist/blip-ds-react/components';

const Card = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Card
              </BdsTypo>
              <BdsTypo variant="fs-16">Os cards contêm conteúdo e ações sobre um único assunto.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsCard id="5432-card" clickable dataTest="should-card">
                <BdsCardHeader align="center">
                  <BdsCardTitle text="@TakeBlip"></BdsCardTitle>
                </BdsCardHeader>
                <BdsCardBody>
                  <BdsGrid direction="column" xxs="12" gap="1" justify-content="center" align-items="center">
                    <BdsIcon type="logo" size="brand" name="blip-chat"></BdsIcon>
                  </BdsGrid>
                </BdsCardBody>
                <BdsCardFooter>
                  <BdsButton size="standard" type="button" type-icon="icon" variant="tertiary">
                    Botão Primário
                  </BdsButton>
                </BdsCardFooter>
              </BdsCard>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Card;
