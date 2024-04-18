import React from 'react';
import {
  BdsAvatar,
  BdsButtonIcon,
  BdsGrid,
  BdsNavbar,
  BdsNavbarContent,
  BdsPaper,
  BdsTypo,
} from 'blip-ds/dist/blip-ds-react/components';

const Navbar = () => {
  return (
    <>
      <BdsGrid margin="y-4" container>
        <BdsPaper class="w-100">
          <BdsGrid flex-wrap="wrap" margin="y-4" padding="x-3">
            <BdsGrid xxs="12" margin="y-2" direction="column">
              <BdsTypo variant="fs-20" bold="bold">
                Navbar
              </BdsTypo>
              <BdsTypo variant="fs-16">
                Utilize para possibilitar ao usuário acessar funcionalidades de um produto que não necessariamente são
                relacionadas a um mesmo contexto.
              </BdsTypo>
            </BdsGrid>
            <BdsGrid xxs="12" margin="y-2" direction="column" gap="2">
              <BdsNavbar
                id="2547-navbar"
                orientation="horizontal"
                justifyContent="space-between"
                backgroundColor="surface-1"
                dataTest="should-navbar"
              >
                <BdsNavbarContent>
                  <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
                  <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
                  <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
                  <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
                  <BdsButtonIcon size="short" variant="secondary" icon="attention"></BdsButtonIcon>
                </BdsNavbarContent>
                <BdsNavbarContent>
                  <BdsButtonIcon size="short" variant="secondary" icon="settings-general"></BdsButtonIcon>
                  <BdsButtonIcon size="short" variant="secondary" icon="question"></BdsButtonIcon>
                  <BdsButtonIcon size="short" variant="secondary" icon="bell"></BdsButtonIcon>
                  <BdsAvatar name="Dwight Schrute" size="small"></BdsAvatar>
                </BdsNavbarContent>
              </BdsNavbar>
            </BdsGrid>
          </BdsGrid>
        </BdsPaper>
      </BdsGrid>
    </>
  );
};
export default Navbar;
