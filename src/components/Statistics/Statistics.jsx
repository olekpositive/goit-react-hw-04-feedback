import PropTypes from 'prop-types';
import { Votes, VotesItem, Name, Rate } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalVotes,
  positivePercentage,
}) => {
  return (
    <>
      <Votes>
        <VotesItem>
          <Name>Good:</Name>
          <Rate>{good}</Rate>
        </VotesItem>
        <VotesItem>
          <Name>Neutral:</Name>
          <Rate>{neutral}</Rate>
        </VotesItem>
        <VotesItem>
          <Name>Bad:</Name>
          <Rate>{bad}</Rate>
        </VotesItem>
        <VotesItem>
          <Name>Total:</Name>
          <Rate>{totalVotes}</Rate>
        </VotesItem>
        <VotesItem>
          <Name>Positive feedback:</Name>
          <Rate>{positivePercentage}%</Rate>
        </VotesItem>
      </Votes>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
