import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { COLORS, FAMILIES, QUERIES, WEIGHTS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
      <ActionGroupDesktop>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
        </ActionGroupDesktop>
        <Logo />
        <SubscribeGroupDesktop>

            <SubscribeButton>
              Subscribe
            </SubscribeButton>
            <AlreadyButton>
              Already a subscriber
              </AlreadyButton>
        </SubscribeGroupDesktop>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupDesktop = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    gap: 24px;

      svg {
        display: block;
      }
  }
`;

const SubscribeButton = styled.button`
  position: relative;
  background-color: ${COLORS.primary};
  width: 143px;
  height: 40px;
  border-radius: 4px;
  marign: auto;
  font-family: ${FAMILIES.sansSerif};
  font-weight: ${WEIGHTS.normal};
  text-align: center;
  color: ${COLORS.white}
`;

const SubscribeGroupDesktop = styled.div`
display:none;

@media ${QUERIES.desktopAndUp} {
  display: revert;
  position: relative;
`;

const AlreadyButton = styled.button`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  text-align: center;
  font-family: ${FAMILIES.serif};
  text-decoration: underline;
  font-style: italic;
  font-weight: ${WEIGHTS.normal};
  color: ${COLORS.gray[900]}
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

export default Header;
