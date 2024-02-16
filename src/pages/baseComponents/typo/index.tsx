import React from 'react';

import { BdsDropdown, BdsGrid, BdsPaper, BdsTypo } from 'blip-ds/dist/blip-ds-react/components';

const Typo = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Typo
              </BdsTypo>
              <BdsTypo variant="fs-16">
                O BlipDS inclui uma variedade de escalas e tipos de textos que atendem as necessidades do produto.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo id="5137-should" dataTest="open-typo" variant="fs-16">
                Texto para teste do typo.
              </BdsTypo>
              <BdsDropdown position="bottom-center">
                <div slot="dropdown-activator">
                  <bds-button variant="primary">Open Menu</bds-button>
                </div>
                <div slot="dropdown-content">
                  <bds-list type-list="default">
                    <bds-list-item
                      value="02"
                      text="Text"
                      secondary-text="Secondary text"
                      clickable
                      icon="blip-ideas"
                    ></bds-list-item>
                    <bds-list-item
                      value="03"
                      text="Text"
                      secondary-text="Secondary text"
                      clickable
                      icon="blip-ideas"
                    ></bds-list-item>
                    <bds-list-item
                      value="04"
                      text="Text"
                      secondary-text="Secondary text"
                      avatar-name="Alvare Horta"
                    ></bds-list-item>
                  </bds-list>
                </div>
              </BdsDropdown>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Typo;
