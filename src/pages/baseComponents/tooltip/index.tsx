import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsTooltip, BdsIcon } from 'blip-ds/dist/blip-ds-react/components';

const Tooltip = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Tooltip
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Exibem texto informativo quando os usuários passam o mouse, focalizam ou tocam em um elemento.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTooltip
                id="6598-should"
                dataTest="open-tooltip"
                position="left-center"
                tooltip-text="Texto do tooltip"
              >
                <BdsIcon name="warning"></BdsIcon>
              </BdsTooltip>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Tooltip;
