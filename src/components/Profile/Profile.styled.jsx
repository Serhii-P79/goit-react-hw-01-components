import styled from '@emotion/styled';

export const Profiles = styled.div`
  width: 400px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  background-color: white;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
  }

  .avatar {
    width: 80%;
    padding: 10px;
    border-radius: 50%;
    background-color: #eee8ee;
  }

  .name {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .tag {
    color: #8c8c8c;
    margin-bottom: 0;
  }

  .location {
    color: #8c8c8c;
    margin-bottom: 0;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    border: 1px solid #c4c4c4;
    height: 70px;
    align-items: center;
    background-color: #eee8ee;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    width: 33.3%;
  }

  li:not(:last-child)::after {
    content: '';
    height: 100%;
    border: 1px solid #c4c4c4;
    position: absolute;
    right: 0;
  }

  .label {
    color: #8c8c8c;
  }

  .quantity {
    font-weight: 700;
  }
`;
