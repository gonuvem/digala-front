import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 100%;

  & + div {
    margin-top: 0.5rem;
  }

  div:first-child {
    display: flex;

    width: inherit;
    height: 10rem;

    border-radius: 4px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  input {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);

    width: 80%;
    padding: 1rem;

    border: none;
    border-radius: 4px;

    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.008),
      0 6.7px 5.3px rgba(0, 0, 0, 0.012), 0 12.5px 10px rgba(0, 0, 0, 0.015),
      0 22.3px 17.9px rgba(0, 0, 0, 0.018), 0 41.8px 33.4px rgba(0, 0, 0, 0.022),
      0 100px 80px rgba(0, 0, 0, 0.03);
  }
`;
