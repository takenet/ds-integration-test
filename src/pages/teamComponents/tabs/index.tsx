import React from 'react';
import { BdsGrid, BdsPaper, BdsTypo, BdsTabGroup, BdsTabItem } from 'blip-ds/dist/blip-ds-react/components';

const Tabs = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Tabs
              </BdsTypo>
              <BdsTypo variant="fs-16">
                É uma entrada de texto normal aprimorada por um painel de opções sugeridas.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTabGroup id="8563-tabs" dtButtonPrev="should-button-prev" dtButtonNext="should-button-next">
                <BdsTabItem label="Basic settings">
                  <BdsTypo variant="fs-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies consectetur quam ut feugiat.
                    Integer arcu enim, placerat eget mauris sed, pretium congue augue.
                  </BdsTypo>
                </BdsTabItem>
                <BdsTabItem label="Advanced settings">
                  <BdsTypo variant="fs-16">
                    Donec ut lacus sit amet tellus egestas placerat non sed lacus. Curabitur varius commodo sagittis. In
                    hac habitasse platea dictumst. Morbi non suscipit nisi.
                  </BdsTypo>
                </BdsTabItem>
              </BdsTabGroup>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Tabs;
