import React from 'react';
import {
  BdsButton,
  BdsDropdown,
  BdsGrid,
  BdsList,
  BdsListItem,
  BdsPaper,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';

const Dropdown = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Dropdown
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Dropdown são espaços que se abrem abaixo de um componente para habilitar seleções ou listagens de itens
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsDropdown id="3746-dropdown" dataTest="should-dropdown">
                <BdsGrid slot="dropdown-activator">
                  <BdsButton variant="primary">Open Menu</BdsButton>
                </BdsGrid>
                <BdsGrid slot="dropdown-content">
                  <BdsList typeList="default">
                    <BdsListItem
                      value="01"
                      text="Text"
                      secondaryText="Secondary text"
                      clickable
                      icon="blip-ideas"
                    ></BdsListItem>
                    <BdsListItem
                      value="02"
                      text="Text"
                      secondaryText="Secondary text"
                      clickable
                      icon="blip-ideas"
                    ></BdsListItem>
                    <BdsListItem
                      value="03"
                      text="Text"
                      secondaryText="Secondary text"
                      clickable
                      icon="blip-ideas"
                    ></BdsListItem>
                  </BdsList>
                </BdsGrid>
              </BdsDropdown>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Dropdown;
