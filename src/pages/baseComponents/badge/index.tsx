import React from 'react';
import { BdsBadge, BdsGrid, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Badge = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Badge
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O badge é um componente usado para prover informação sobre novas atualizações e notificações.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsBadge id="3419-badge" color="system" icon="info" shape="circle" dataTest="should-badge"></BdsBadge>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Badge;
