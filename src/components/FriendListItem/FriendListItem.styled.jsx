import styled from '@emotion/styled';

export const FriendListItemCss = styled.li`
  width: 300px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  justify-content: start;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  :not(:last-child) {
    margin-bottom: 20px;
  }

  .status {
    background-color: ${props => (props.status ? '#00ff0d;' : '#ff0000')};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin-right: 20px;
  }

  .avatar {
    margin-right: 30px;
  }
`;
