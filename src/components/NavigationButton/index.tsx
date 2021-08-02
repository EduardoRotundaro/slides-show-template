import { FC } from 'react';

import { Container, Button } from './styles';

type PropsType = {
  action: 'prev' | 'next',
  onClick: () => void,
  disabled?: boolean,
};

const NavigationButton: FC<PropsType> = function (props) {
  const {
    action,
    onClick,
    disabled,
  } = props;

  const clickAction = function () {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <Container left={action === 'prev'} right={action === 'next'} className={action === 'next'? 'fadeIn duration-500' : 'fadeIn duration-500'}>
      <div>
        <div>
          {action === 'prev' && 'Anterior'}
          {action === 'next' && 'Próximo'}
        </div>
        <Button type="button" onClick={clickAction}>
          {action === 'prev' && (
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
              <g>
                <path 
                  transform="rotate(0,16,16) translate(0,6.15000057220459) scale(1,1)  " 
                  fill="#ECF0F1" 
                  d="M11.400024,0L14.400024,2.6000067 8.2000122,8.0000013 32,8.0000013 32,11.699999 8.2000122,11.699999 14.400024,17.100008 11.400024,19.699999 0,9.8999957z" 
                />
              </g>
            </svg>
          )}
          {action === 'next' && (
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
              <g>
                <path 
                  transform="rotate(0,16,16) translate(0,6.09999979138373) scale(1.00000005960465,1.00000005960465)  " 
                  fill="#ECF0F1" 
                  d="M20.599993,0L31.999998,9.8999927 20.599993,19.799999 17.599995,17.199995 23.79999,11.799986 0,11.699995 0,7.9999988 23.79999,7.9999988 17.599995,2.5999906z" 
                />
              </g>
            </svg>
          )}
        </Button>
      </div>
    </Container>
  );
};

export default NavigationButton;
