import React from 'react';

import { BdsGrid, BdsPaper, BdsTypo, BdsList, BdsListItem } from 'blip-ds/dist/blip-ds-react/components';

const ListChackbox = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                List Chackbox
              </BdsTypo>
              <BdsTypo variant="fs-16">As listas são índices verticais contínuos de texto e outros elementos.</BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsList typeList="checkbox">
                <BdsListItem value="01" id="4645-should" dataTest="open-list-checkbox">
                  <bds-list-item-content>
                    <bds-typo>Text of the item</bds-typo>
                  </bds-list-item-content>
                </BdsListItem>
                <BdsListItem value="02">
                  <bds-list-item-content>
                    <bds-typo>Text of the item</bds-typo>
                  </bds-list-item-content>
                </BdsListItem>
              </BdsList>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default ListChackbox;
