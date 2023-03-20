import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedBack.styled';

export const FeedBack = ({ options, handleClick }) => {
  const optionsKey = Object.keys(options);
  return (
    <>
      <ButtonList>
        {optionsKey.map((option, index) => {
          const label = option.charAt(0).toUpperCase() + option.slice(1);

          return (
            <ButtonItem key={index}>
              <Button type="button" onClick={() => handleClick(option)}>
                {label}
              </Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </>
  );
};

FeedBack.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
