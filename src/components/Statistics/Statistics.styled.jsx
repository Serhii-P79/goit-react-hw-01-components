import styled from '@emotion/styled';

export const StatisticsCss = styled.section`
  display: inline-block;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  .title {
    text-align: center;
    margin: 0;
    padding: 25px;
    background-color: #ffffff;
    text-transform: uppercase;
  }

  .stat-list {
    display: flex;
  }
`;

export const StatisticsItemCss = styled.li`
  display: flex;
  padding: 5px;
  color: white;
  flex-direction: column;
  width: 60px;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${props => {
    return props.color;
  }};
`;
